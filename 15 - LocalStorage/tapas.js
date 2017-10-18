
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = [];

  function addItem(e) {
      e.preventDefault();
      const text = (this.querySelector('[name=item]').value);
      const item = {
          text: text, // or I could have left out the ": text" and just have "text,"
          done: false
      };
      items.push(item);
      this.reset();
  }

  function pouplateList(plates = [], pla) {

  }

  addItems.addEventListener('submit', addItem);