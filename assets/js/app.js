(function(){
  const STORAGE_KEY = 'registeredLetters:v1';

  function qs(sel){return document.querySelector(sel)}

  function load(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw? JSON.parse(raw): [];
    }catch(e){
      console.error('Failed to parse storage',e);
      return [];
    }
  }

  function save(items){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  function render(){
    const tbody = qs('#letters-table tbody');
    const empty = qs('#empty-msg');
    const items = load();
    tbody.innerHTML = '';
    if(items.length === 0){
      empty.style.display = 'block';
      return;
    }
    empty.style.display = 'none';
    items.forEach((it, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${escapeHtml(it.recipient)}</td>
        <td>${escapeHtml(it.address)}</td>
        <td>${escapeHtml(it.dateSent)}</td>
        <td>${escapeHtml(it.tracking)}</td>
        <td><button data-idx="${idx}" class="delete">Delete</button></td>
      `;
      tbody.appendChild(tr);
    });
  }

  function escapeHtml(s){
    return String(s)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#039;');
  }

  function init(){
    render();
    const form = qs('#letter-form');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const recipient = qs('#recipient').value.trim();
      const address = qs('#address').value.trim();
      const dateSent = qs('#dateSent').value;
      const tracking = qs('#tracking').value.trim();
      if(!recipient || !address || !dateSent || !tracking) return;
      const items = load();
      items.push({recipient,address,dateSent,tracking});
      save(items);
      form.reset();
      render();
    });

    qs('#letters-table').addEventListener('click', function(e){
      if(e.target.matches('button.delete')){
        const idx = Number(e.target.getAttribute('data-idx'));
        const items = load();
        items.splice(idx,1);
        save(items);
        render();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
