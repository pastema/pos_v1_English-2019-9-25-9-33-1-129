'use strict';

describe('pos', () => {

  it('should print text', () => {

    const tags = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2',
    ];

    spyOn(console, 'log');

    printReceipt(tags);

    const expectText = `***<store earning no money>Receipt ***
Name：Sprite，Quantity：5 bottles，Unit：3.00(yuan)，Subtotal：12.00(yuan)
Name：Litchi，Quantity：2.5 pounds，Unit：15.00(yuan)，Subtotal：37.50(yuan)
Name：Instant Noodles，Quantity：3 bags，Unit：4.50(yuan)，Subtotal：9.00(yuan)
----------------------
Total：58.50(yuan)
Discounted prices：7.50(yuan)
**********************`;

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('should get all the items without count', () => {
    const expectText = [{
      barcode: 'ITEM000001',
      name: 'Sprite',
      unit: 'bottle',
      price: 3.00,
    },{
      barcode: 'ITEM000005',
      name: 'Instant Noodles',
      unit: 'bag',
      price: 4.50,
      count: 2
    }]
    expect().decodeTags.toBe(expectText);
  });

  it('should decode all barcodes', () => {
    const expectText = [{barcode: 'ITEM000001'},{barcode: 'ITEM000001'},{barcode: 'ITEM000005', count: 2 }]
    expect().decodeBarcodes(expectText);
  });

  it('should combine all the items', () => {
    const expectText = [{
      barcode: 'ITEM000001',
      name: 'Sprite',
      unit: 'bottle',
      price: 3.00,
    },{
      barcode: 'ITEM000005',
      name: 'Instant Noodles',
      unit: 'bag',
      price: 4.50,
      count: 2
    }]
    expect().combineItems.toBe(expectText);
  });

  it('should get all the items without count', () => {
    const expectText = [{barcode: 'ITEM000001'},{barcode: 'ITEM000001'}]
    expect().loadItems.toBe(expectText);
  });



});








