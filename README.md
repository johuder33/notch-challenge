# Notch code challenge

![Notch Demo Image](https://github.com/johuder33/notch-challenge/blob/master/images/demo.png)

To getting started to should clone this repository and then execute the following commands

`yarn`

once you have installed all the dependencies needed, you need to start the application by executing

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Filters

If you want to add more filters, so you just need to add them into the following file [`src/state/reducers/orders/index.ts`](https://github.com/johuder33/notch-challenge/blob/master/src/state/reducers/orders/index.ts#L11) you need to looking for `initialState` constant and add a new entry for `available_filters` attribute.

## Notes

Because of lacking of time I skipped some good and mandatory features like:

* [ ] Unit test
* [ ] Storybook
* [ ] Better handling for TS
* [ ] Better data structure for redux state

Sadly I didn't have enought time to do it, but I least the application is working fine.

## Important

If you run the application and the data is not loaded, that's probably because the rest api endpoint is down, I faced some problem when I was developing the challenge code.
