const modalRendering = (container, links, rerender) => {
  container.innerHTML = ''
  console.log('here')

  if (rerender) {
    container.innerHTML = `<h2>Exempel på tillgängligt modalfönster med &lt;dialog&gt;</h2>
  <p>Här är innehållet i modalfönstret.</p>
  <button id="closeDialogBtn">Stäng</button>`
  }
}
export default modalRendering
