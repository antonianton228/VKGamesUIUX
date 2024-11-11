function switchTab(tab) {
    document.querySelectorAll('.ui_tab').forEach(tabElement => {
      tabElement.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
  
    document.getElementById(`games_tab_${tab}`).classList.add('active');
    document.querySelector(`.${tab}-content`).classList.add('active');
  }
  