// interface Dictionary<T> {
//   [key: string]: T;
// }

export class Potter {
  public DISCOUNT_PRICE = {
    1: 8,
    2: 8 * 2 * 0.95,
    3: 8 * 3 * 0.9,
    4: 8 * 4 * 0.8,
    5: 8 * 5 * 0.75,
  };

  // count and return the amount of unique element in arr
  private toUnique(arr: Array<number>):Array<number> {
    const s = new Set(arr)
    return [...s];
  }

  // remove specified item in arr
  // NOTE THAT arr is always pass by reference
  private removeItem(arr: Array<number>, item: Array<number>) {
    for (const it of item) {
      const idx = arr.indexOf(it);
      if (idx !== -1) {
        arr.splice(idx, 1);
      }
    }
  }

  // calculating the most great discount and return [price, selected_item]
  private selectDiscount(arr:Array<number>, item: Array<number>):[number, Array<number>]{
    console.log(arr, item)
    return [0, []]
  }

  // count the cheapest price by given arr via applying discount
  public price(arr: Array<number>): number {
    let total = 0;
    while (arr.length) {
      const unqItem = this.toUnique(arr);
      const [best_price , selected] = this.selectDiscount(arr,unqItem)
      this.removeItem(arr, selected)
      total += best_price
    }
    return total;
  }
}