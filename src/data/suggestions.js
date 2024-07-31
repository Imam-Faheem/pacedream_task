const suggestions = [
    // Photography
    { id: 1, title: 'D70 Camera', rent: '$99.99', deposit: '$30 Refundable Deposit', imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2020/10/beginnerdslr2020-2048px-9793.jpg', status: 'Stock', category: 'Photography' },
    { id: 2, title: 'Canon EF Lens', rent: '$59.99', deposit: '$20 Refundable Deposit', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Canon_EF_USM_lenses.jpg', status: 'Stock', category: 'Photography' },
    { id: 3, title: 'Nikon D3500', rent: '$79.99', deposit: '$25 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2015/10/12/15/08/camera-984264_1280.jpg', status: 'Stock', category: 'Photography' },
    { id: 4, title: 'Sony Alpha a6000', rent: '$89.99', deposit: '$28 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2017/08/29/14/31/camera-2695684_1280.jpg', status: 'Stock', category: 'Photography' },
    
    // Sports & Outdoor
    { id: 5, title: 'MI Foldable Bike', rent: '$49.99', deposit: '$120 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2014/08/29/14/53/camera-431119_1280.jpg', status: 'Stock', category: 'Sports & Outdoor' },
    { id: 6, title: 'Camping Tent', rent: '$59.99', deposit: '$50 Refundable Deposit', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Canon_EF_USM_lenses.jpg', status: 'Stock', category: 'Sports & Outdoor' },
    { id: 7, title: 'Hiking Backpack', rent: '$39.99', deposit: '$25 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/hiker-1869202_1280.jpg', status: 'Stock', category: 'Sports & Outdoor' },
    { id: 8, title: 'Kayak', rent: '$89.99', deposit: '$70 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/04/45/kayak-1869769_1280.jpg', status: 'Stock', category: 'Sports & Outdoor' },
    { id: 7, title: 'Hiking Backpack', rent: '$39.99', deposit: '$25 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/hiker-1869202_1280.jpg', status: 'Stock', category: 'Sports & Outdoor' },
    { id: 8, title: 'Kayak', rent: '$89.99', deposit: '$70 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/04/45/kayak-1869769_1280.jpg', status: 'Stock', category: 'Sports & Outdoor' },
    
    // Musical
    { id: 9, title: 'Guitar', rent: '$29.99', deposit: '$30 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/04/17/acoustic-guitar-1866743_1280.jpg', status: 'Stock', category: 'Musical' },
    { id: 10, title: 'Drum Set', rent: '$99.99', deposit: '$100 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2015/07/02/20/56/drum-set-828744_1280.jpg', status: 'Stock', category: 'Musical' },
    { id: 11, title: 'Keyboard', rent: '$49.99', deposit: '$40 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2014/07/31/23/55/piano-407013_1280.jpg', status: 'Stock', category: 'Musical' },
    { id: 12, title: 'Violin', rent: '$39.99', deposit: '$30 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2016/11/19/18/06/violin-1838390_1280.jpg', status: 'Stock', category: 'Musical' },
    
    // Tools and Equipment
    { id: 13, title: 'Power Drill', rent: '$19.99', deposit: '$20 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2017/03/12/13/41/black-and-decker-2139076_1280.jpg', status: 'Stock', category: 'Tools and Equipment' },
    { id: 14, title: 'Ladder', rent: '$9.99', deposit: '$10 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2017/05/23/22/24/ladder-2338998_1280.jpg', status: 'Stock', category: 'Tools and Equipment' },
    { id: 15, title: 'Circular Saw', rent: '$24.99', deposit: '$20 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2014/09/16/17/37/saw-449585_1280.jpg', status: 'Stock', category: 'Tools and Equipment' },
    { id: 16, title: 'Tool Set', rent: '$34.99', deposit: '$25 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2014/08/05/10/31/tools-410809_1280.jpg', status: 'Stock', category: 'Tools and Equipment' },
    
    // Fitness
    { id: 17, title: 'Treadmill', rent: '$39.99', deposit: '$40 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2016/01/19/15/05/treadmill-1144424_1280.jpg', status: 'Stock', category: 'Fitness' },
    { id: 18, title: 'Yoga Mat', rent: '$5.99', deposit: '$5 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2016/11/23/14/45/woman-1850929_1280.jpg', status: 'Stock', category: 'Fitness' },
    { id: 19, title: 'Dumbbells', rent: '$14.99', deposit: '$10 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2016/11/21/15/10/dumbbell-1846528_1280.jpg', status: 'Stock', category: 'Fitness' },
    { id: 20, title: 'Exercise Bike', rent: '$29.99', deposit: '$25 Refundable Deposit', imageUrl: 'https://cdn.pixabay.com/photo/2016/11/19/19/25/exercise-bike-1838657_1280.jpg', status: 'Stock', category: 'Fitness' },
  ];
  
  export default suggestions;
  