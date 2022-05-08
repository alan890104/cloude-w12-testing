// interface Dictionary<T> {
//   [key: string]: T;
// }

export class Potter {
  private DISCOUNT_PRICE = {
    1: 8,
    2: 8 * 2 * 0.95,
    3: 8 * 3 * 0.9,
    4: 8 * 4 * 0.8,
    5: 8 * 5 * 0.75,
  } as {[key:number]:number};

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

  // calculating the most great discount and return [best_price, selected_item]
  private selectDiscount(arr:Array<number>, item: Array<number>):[number, Array<number>]{
    // 4+4 is cheaper than 3+5
    if(arr.length === 8 && item.length===5){
      const best_price = this.DISCOUNT_PRICE[4]
      const selected = item.slice(0,-1)
      return [best_price, selected]
    } 
    const best_price = this.DISCOUNT_PRICE[item.length as number]
    const selected = item
    return [best_price, selected]
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