const textInput = document.getElementById('textInput');
const chart = document.getElementById('chart');

textInput.addEventListener('input', () => {
  const text = textInput.value.toLowerCase();
  const caunt = {};
  const totalLetters = text.replace(/[^a-z]/g, '').length;

  for (let char of text) {
    if (/[a-z]/.test(char)) {
      caunt[char] = (caunt[char] || 0) + 1;
    }
  }

  const bbb = Object.entries(caunt).sort((a, b) => b[1] - a[1]);

  chart.innerHTML = '';
  for (let [letter, count] of bbb) {
    const percentage = ((count / totalLetters) * 100).toFixed(2);

    const row = document.createElement('div');
    row.className = 'chart-row';

    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = letter.toUpperCase();

    const bar = document.createElement('div');
    bar.className = 'bar';

    const fill = document.createElement('div');
    fill.className = 'fill';
    fill.style.width = `${percentage}%`;

    const span = document.createElement('span');
    span.className = 'percentage';
    span.textContent = `${percentage}%`;

    fill.appendChild(span);
    bar.appendChild(fill);
    row.appendChild(label);
    row.appendChild(bar);

    chart.appendChild(row);
  }
});