'use strict';

{
  class Tabs {
    constructor(btnSelector, contentSelector) {
      this.btns = document.querySelectorAll(btnSelector);
      this.contents = document.querySelectorAll(contentSelector);

      this.btns.forEach(btn => {
        btn.addEventListener('click', () => this.activate(btn));
      });
    }

    activate(btn) {
      const target = btn.dataset.tab;

      this.btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      this.contents.forEach(c => {
        c.classList.toggle('active', c.dataset.content === target);
      });
    }
  }

  new Tabs('.tab-btn', '.tab-content');


  document.querySelectorAll('.work-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });


}