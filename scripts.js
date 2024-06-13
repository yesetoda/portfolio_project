async function startTyping() {
  const textElement1 = document.getElementById("about_me_text1");
  const text2Element = document.getElementById("about_me_text2");

  const contentData = {
    "Competitive Programmer": {
      title: "Competitive Programmer",
      description:
        "I am a Competitive Programmer with a deep passion for solving complex algorithmic challenges. I thrive on the thrill of competition and pushing the boundaries of what is possible through innovative coding solutions. With a strong foundation in data structures and algorithms, I am constantly seeking out new problems to tackle and opportunities to hone my skills. Whether it is optimizing time complexity or finding elegant approaches to solve seemingly intractable problems, I am driven by the joy of the hunt and the satisfaction of creating efficient, high-performing code.",
    },
    "Web Scrapping Engineer": {
      title: "Web Scrapping Engineer",
      description:
        "I am a creative Web Scrapping Engineer with a keen eye for aesthetics and user experience. I specialize in extracting relevant and representative data from web pages, leveraging advanced techniques and tools to navigate complex websites and extract valuable insights. My expertise lies in designing efficient scraping workflows, handling dynamic content, and overcoming challenges posed by website changes or anti-scraping measures. I am passionate about transforming raw web data into structured, actionable information that can drive business decisions and power innovative applications.",
    },
    A2svian: {
      title: "A2svian",
      description:
        "I am an A2svian, a dedicated member of the A2SV community. I contribute to open-source projects and collaborate with fellow A2Svians to create innovative solutions. As part of this vibrant community, I am committed to learning, sharing knowledge, and driving positive change through technology.",
    },
    "Python Developer": {
      title: "Python Developer",
      description:
        "I am a skilled Python developer with expertise in building web applications, data analysis, and automation tools. I possess a deep understanding of Python's core features and libraries, allowing me to craft efficient, scalable, and maintainable code. Whether it's developing complex back-end systems, implementing data-driven insights, or automating repetitive tasks, I leverage the power of Python to deliver innovative solutions that address real-world challenges.",
    },
    "Backend Developer": {
      title: "Backend Developer",
      description:
        "I am a Backend Developer with strong analytical and problem-solving skills. I leverage data to uncover insights and drive informed decision-making. My expertise lies in designing and implementing robust server-side architectures, integrating diverse data sources, and optimizing system performance. I am passionate about building scalable and secure backend solutions that power dynamic web applications and drive business growth.",
    },
  };

  const keys = Object.keys(contentData);
  let i = 0;

  while (true) {
    const selectedKey = keys[i % keys.length];

    textElement1.textContent = "";
    text2Element.textContent = "";

    await new Promise((resolve) => {
      new Typed(textElement1, {
        strings: [selectedKey],
        typeSpeed: 2,
        backSpeed: 1,
        showCursor: false,
        onComplete: resolve,
      });
    });

    await new Promise((resolve) => setTimeout(resolve, 300));

    await new Promise((resolve) => {
      new Typed(text2Element, {
        strings: [contentData[selectedKey].description],
        typeSpeed: 2,
        backSpeed: 1,
        showCursor: false,
        onComplete: resolve,
      });
    });

    await new Promise((resolve) => setTimeout(resolve, 1500));

    i++;
  }
}

window.onload = startTyping;

const radioButtons = document.querySelectorAll(
  '.radio_chooser input[type="radio"]'
);
radioButtons.forEach((radio) => {
  radio.addEventListener("change", handleRadioChange);
});

function handleRadioChange() {
  const selectedOption = this.id.split("_").pop();
  const contentArea = document.querySelector(".radio_content_area");

  contentArea.querySelectorAll(".radio_content").forEach((div) => {
    div.classList.remove("radio_active");
  });
  switch (selectedOption) {
    case "b":
      document.querySelector("#radio_content_b").classList.add("radio_active");
      break;
    case "c":
      document.querySelector("#radio_content_c").classList.add("radio_active");
      break;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".about_zoom");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const cardImg = this.querySelector("img");
      const cardRect = card.getBoundingClientRect();
      this.addEventListener("mousemove", function (event) {
        const mouseX = event.clientX - cardRect.left;
        const mouseY = event.clientY - cardRect.top;
        const offsetX = (mouseX / cardRect.width - 0.1) * 2;
        const offsetY = (mouseY / cardRect.height - 0.1) * 2;
        cardImg.style.transformOrigin = `${offsetX * 30}% ${offsetY * 100}%`;
        cardImg.style.transform = "scale(1.5)";
      });
    });

    card.addEventListener("mouseleave", function () {
      const cardImg = this.querySelector("img");
      cardImg.style.transform = "scale(1)";
    });
  });
});

function validateForm() {
    var email = document.getElementById("email").value;
    var textarea = document.getElementById("textarea").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (textarea.trim() === "") {
        alert("Please enter your message.");
        return false;
    }

    
    setTimeout(function() {
        var isSuccess = Math.random() < 0.8; 

        if (isSuccess) {
            window.location.href = "success.html"; 
        } else {
            window.location.href = "not_found.html";}
    }, 1000);

    return false;
}
