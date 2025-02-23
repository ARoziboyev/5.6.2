const a = document.getElementById('textInput'), 
      b = document.getElementById('chart');

a.addEventListener('input', () => {
    
    let c = a.value.toLowerCase(), 
        d = {}, 
        e = c.replace(/[^a-z]/g, '').length;

    for (let f of c) { 
        if (/[a-z]/.test(f)) { 
            if (d[f]) { 
                d[f] = d[f] + 1; 
            } else { 
                d[f] = 1; 
            } 
        } 
    }

    let g = Object.entries(d)
                  .sort((h, i) => { 
                      if (i[1] > h[1]) { 
                          return 1; 
                      } else { 
                          return -1; 
                      } 
                  });

    b.innerHTML = '';

    for (let j = 0; j < g.length; j++) { 
        let k = g[j][0], 
            l = g[j][1];

        let m = ((l / e) * 100)
                     .toFixed(3);

        let n = document.createElement('div');
        n.className = 'chart-row';

        let o = document.createElement('div');
        o.className = 'label'; 
        o.textContent = k.toUpperCase();

        let p = document.createElement('div');
        p.className = 'bar';

        let q = document.createElement('div');
        p.appendChild(q);
        b.appendChild(n);
        q.className = 'fill'; 
        q.style.width = `${m}%`;
        
        let r = document.createElement('span');
        n.appendChild(r); 
        q.appendChild(document.createTextNode("")); 
        r.className = 'percentage'; 
        r.textContent = `${m}%`;
        n.appendChild(o);
        n.appendChild(p);

    }
});
