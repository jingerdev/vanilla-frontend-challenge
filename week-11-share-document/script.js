const copyText = () => {
  const linkText = document.getElementById('link')
  linkText.select()
  linkText.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(linkText.value)
}