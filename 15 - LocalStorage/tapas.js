
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items =JSON.parse(localStorage.getItem('items')) || [];

  function addItem(e) {
      e.preventDefault();
      const text = (this.querySelector('[name=item]').value);
      const item = {
          text: text, // or I could have left out the ": text" and just have "text,"
          done: false
      };
      items.push(item);
      pouplateList(items, itemsList);
      localStorage.setItem('items', JSON.stringify(items));
      this.reset();
  }

  function pouplateList(plates = [], platesList) {
        platesList.innerHTML = plates.map((plate, i) => {
            return `
            <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
            </li>
            
            `
        }).join('');
  }

  function toggleDone(e) {
        if(!e.target.matches('input')) return; //skip this unless its an input
}

  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);

  pouplateList(items, itemsList);