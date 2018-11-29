
# NgrxDemo
## Counter
> Basic sample to show how different component sync the shared data in NGRX mechanism.
* define add, subtract action
* define reducer to handle actions and process the data
* define selector to be the interface between componet and reducer
* component dispatch the action with payload data to reducer
* component subscribe the data via selector
* Once data changed preview of the component changed
 
## Todo list
> Sample for using parameterized selectors.

```javascript
// ----Selector.ts----

// return the data 
export const getDatas = createSelector(getCountState, fromReducer.getData);

// return the function, and it's allowed to put parameter in 
export const getUserDatas = createSelector(getDatas, datas => (props) => {
    return props === 'All' ? datas : datas.filter(item => item.userId === props);
});
```
```javascript
// ----component.ts----

// subscribe the users and add All to the top of return array
this.userlist$ = this.store$.pipe(
      select(featureSelectors.getUsers),
      map((items) => {
        console.log(items);
        items.unshift({userId: 'All'});
        return items;
      }
    ));

// subscribe the userdata 
this.userdatas$ = this.store$.pipe(select(featureSelectors.getUserDatas));
```
```html
<!-- ----template.html---- -->

<!-- subscribe the users and choose the select user -->
<mat-select placeholder="Select User ID" [(value)]="selectedUser">
    <mat-option *ngFor="let user of userlist$ | async" [value]="user.userId">
              {{user.userId}}

<!-- selectedUser as the input data to subscribe the userdata -->
<ul class="list-group" *ngFor="let item of (userdatas$ | async)(selectedUser)">
    <li class="list-group-item list-group-item-action" [ngClass]="{
              'list-group-item-success': item.completed,
              'list-group-item-danger': !item.completed
            }" (click)="checkItem(item)">
```

## Development server
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
