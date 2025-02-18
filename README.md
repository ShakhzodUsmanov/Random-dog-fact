# 🐶 Random Dog Facts & Images

A simple web project that displays a random dog fact and sets a random dog image as the background.

## 🚀 Features
- Fetches a random dog fact from [Dog API](https://dogapi.dog/)
- Fetches a random dog image from [Random Dog API](https://random.dog/)
- Updates the fact and image with a button click
- Prevents fetching video files as background images
- Disables the button while loading new data

## 📸 Preview
![Project Screenshot](https://via.placeholder.com/800x400?text=Random+Dog+Facts+App)

## 🛠️ Technologies Used
- HTML
- CSS
- JavaScript (ES6+)
- Fetch API

## 📂 Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/random-dog-facts.git
   ```
2. Navigate to the project folder:
   ```sh
   cd random-dog-facts
   ```
3. Open `index.html` in your browser.

## 🎯 How It Works
1. The page automatically loads a random dog fact and image.
2. Clicking the **"Get New Dog Fact & Image"** button fetches new data.
3. The button is disabled and shows "Loading..." while fetching data.
4. If a video file is received instead of an image, the request is retried.

## 📝 Code Overview
```js
async function getFact() {
    const res = await fetch("https://dogapi.dog/api/v2/facts");
    const data = await res.json();
    document.querySelector(".fact").textContent = data.data[0].attributes.body;
}

async function getImg() {
    const res = await fetch("https://random.dog/woof.json");
    const data = await res.json();
    if (data.url.endsWith(".mp4") || data.url.endsWith(".webm")) return getImg();
    document.body.style.backgroundImage = `url("${data.url}")`;
}

async function reset() {
    const button = document.getElementById("reset");
    button.disabled = true;
    button.textContent = "Loading...";
    await Promise.all([getImg(), getFact()]);
    button.disabled = false;
    button.textContent = "Get New Dog Fact & Image";
}

document.getElementById("reset").addEventListener("click", reset);
reset();
```

## 🎉 Contributions
Feel free to fork this repository and submit pull requests with improvements!

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
🐕 Made with ❤️ for dog lovers!

