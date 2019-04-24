// 解析嵌套
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;

let addrs = [
  {
    first: 1,
    last: 2
  },
  {
    first: 3,
    last: 4
  }
]

console.log(tmpl(addrs))