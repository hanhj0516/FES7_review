class ColaGenerator {
  constructor(){
    this.itemList = document.querySelector('.cola-list');
  }

  async loadData() {

    tr
    const response = await fetch('./items.json');
    if (!response.ok) {
      throw new Error('HTTP ERROR!! :' + response.status);
    }
    return await response.json();
  }
}