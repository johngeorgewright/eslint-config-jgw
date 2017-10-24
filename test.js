export function * mung () {

}

// eslint-disable-next-line generator-star-spacing
export function* mung2 () {
}

export class Mung {
  * mung () {
  }

  // eslint-disable-next-line generator-star-spacing
  *mung2 () {
  }
}

export const constant = 1

// eslint-disable-next-line prefer-const
export let constant2 = 2

export const operatorLinebreak
  = true
  && false

// eslint-disable-next-line operator-linebreak
export const operatorLinebreak2 =
  // eslint-disable-next-line operator-linebreak
  true &&
  false
