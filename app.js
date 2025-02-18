async function getFact() {
  try {
    const res = await fetch("https://dogapi.dog/api/v2/facts")
    const data = await res.json()
    const [{attributes: {body}}] = data.data
    document.querySelector('.fact').innerHTML =  body
  } catch (error) {
    console.error(error)
    document.querySelector('.fact').innerHTML =  "Failed to dowload facts"
  }
}

async function getImg(){
  try {
    const res = await fetch('https://random.dog/woof.json?ref=public_apis')
    const data = await res.json()
    const {url} = data

    if(url.endsWith(".mp4") || url.endsWith(".webm")){
      getImg()
    }

    document.body.style = `background-image: url("${url}")`
  } catch (error) {
    console.error(error);
  }
}

async function reset(){
  const btn = document.getElementById("reset") 
  btn.disabled = true
  btn.innerHTML = "Loading..."

  await Promise.all([getImg(), getFact()])

  btn.disabled = false
  btn.innerHTML = "Reset"
}

document.getElementById("reset").addEventListener("click", reset)

reset()