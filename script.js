const activities = [
  {
    id: "activity-1",
    number: "01",
    title: "Illustration Hunt",
    description: "Explore and identify examples of medical, technical, and book illustration found in visual materials.",
    date: "Date to be added",
    tools: ["Illustration Analysis", "Visual Communication"],
    images: ["assets/illustration-hunt.png"],
    previewImage: "assets/illustration-hunt-cover.jpg",
    objectives: "Identify different types of illustrations and explain how each communicates information to its viewers.",
    reflection: "This activity helped me recognize how illustrations communicate information in different fields. I learned that medical, technical, and book illustrations are useful because they make detailed ideas easier to understand.",
    learning: "I learned to identify the purpose and visual characteristics of different illustration types."
  },
  {
    id: "activity-2-1",
    number: "02.1",
    title: "Seven Mini Artworks",
    description: "Create a collection of seven small works that explore visual ideas.",
    date: "Date to be added",
    tools: ["Pencil Drawing", "Visual Composition"],
    images: ["assets/seven-mini-artworks.png"],
    previewImage: "assets/seven-mini-artworks-cover.jpg",
    objectives: "Create multiple small artworks using basic drawing techniques, balanced composition, and visual elements found in nature and everyday surroundings.",
    reflection: "This activity helped me practice observation and composition through several small drawings. I became more patient with lines and learned how simple shapes can form scenery, plants, and objects.",
    learning: "I learned to improve my sketching, organize different elements in a composition, and use visual details to create a complete scene."
  },
  {
    id: "activity-2-2",
    number: "02.2",
    title: "Color Schemes and Properties",
    description: "Experiment with color relationships, properties, and visual combinations.",
    date: "Date to be added",
    tools: ["Color Theory", "Color Pencils"],
    images: ["assets/color-schemes-properties.png"],
    previewImage: "assets/color-schemes-properties-cover.jpg",
    objectives: "Apply color properties and a selected color scheme to an illustrated character while observing contrast, balance, and visual harmony.",
    reflection: "This activity helped me understand how colors influence the mood and appearance of a character. I learned to combine complementary tones carefully so the details remain clear and visually balanced.",
    learning: "I learned how to use color schemes and properties to add depth, contrast, and character to a digital or hand-drawn artwork."
  },
  {
    id: "activity-2-3",
    number: "02.3",
    title: "My Favorite Spot",
    description: "Represent a personally meaningful place through an original visual artwork.",
    date: "Date to be added",
    tools: ["Pencil", "Perspective Drawing"],
    images: ["assets/my-favorite-spot-2.png"],
    previewImage: "assets/my-favorite-spot-cover.jpg",
    objectives: "Draw a familiar outdoor location using perspective, architectural lines, and natural surroundings.",
    reflection: "This activity allowed me to observe and draw one of my favorite spaces in greater detail. I became more aware of perspective, repeated structures, and how plants and buildings create visual depth.",
    learning: "I learned to apply perspective and line work to show the distance, position, and atmosphere of a familiar place."
  },
  {
    id: "activity-3",
    number: "03",
    title: "Before and After",
    description: "Compare a starting concept with a revised and developed visual output.",
    date: "Date to be added",
    tools: ["Pencil", "Coloring", "Visual Refinement"],
    images: ["assets/before-and-after.png"],
    previewImage: "assets/before-and-after-cover.jpg",
    objectives: "Create an original character and improve the initial sketch through clearer outlines, color, and refined details.",
    reflection: "This activity showed me how much an artwork can improve with practice and revision. Comparing the initial sketch with the colored Pikachu helped me see the value of refining shapes, lines, and details.",
    learning: "I learned that visual improvement comes from reviewing earlier work, practicing carefully, and using color and clean lines to strengthen a character."
  },
  {
    id: "activity-4-5",
    number: "04–05",
    title: "Pencil Techniques",
    description: "Practice different pencil marks, values, textures, and drawing techniques.",
    date: "Date to be added",
    tools: ["Pencil", "Shading Techniques"],
    images: [],
    previewImage: "assets/pencil-techniques-cover.jpg",
    videos: ["assets/pencil-techniques.mp4"],
    objectives: "Explore pencil drawing and character refinement through the demonstrated activity.",
    reflection: "This activity helped me see how a drawing can develop from a light sketch into a clearer, more finished character. I learned to work patiently on outlines and details before adding color.",
    learning: "I learned to build a drawing in stages and use line work and shading to make a character more defined."
  },
  {
    id: "activity-6",
    number: "06",
    title: "Character Design",
    description: "Develop an original character through visual research and design choices.",
    date: "Date to be added",
    tools: ["Character Design", "Pencil Drawing"],
    images: ["assets/character-design.png"],
    previewImage: "assets/character-design-cover.jpg",
    objectives: "Develop a character illustration through sketching, refining its features, and adding details.",
    reflection: "Designing this character helped me practice turning a simple sketch into a more expressive drawing. I learned to pay attention to facial features, shape, and small details that give a character personality.",
    learning: "I learned that clear shapes and carefully refined features help communicate a character's expression."
  },
  {
    id: "activity-7",
    number: "07",
    title: "Inkscape Exploration",
    description: "Explore vector tools and workflows using Inkscape.",
    date: "Date to be added",
    tools: ["Inkscape", "Vector Graphics"],
    images: [],
    previewImage: "assets/inkscape-exploration-cover.jpg",
    videos: ["assets/inkscape-exploration.mp4"],
    objectives: "Explore Inkscape's vector tools and observe how shapes and objects can be created and edited.",
    reflection: "Exploring Inkscape gave me a better sense of how digital tools can turn ideas into clean vector artwork. I learned that experimenting with the available tools is an important part of discovering a workflow.",
    learning: "I learned to explore vector drawing tools and manipulate digital shapes while developing an illustration."
  },
  {
    id: "activity-8",
    number: "08",
    title: "Basic Shapes and Object Manipulation (Group 2)",
    description: "Use basic shapes and manipulation techniques to construct visual objects.",
    date: "Date to be added",
    tools: ["Inkscape", "Shape Manipulation"],
    images: ["assets/basic-shapes-group-2.png"],
    previewImage: "assets/basic-shapes-group-2-cover.jpg",
    objectives: "Construct a visual scene by combining and arranging basic shapes and objects.",
    reflection: "This activity showed me how simple shapes can be combined to create a detailed scene. I enjoyed seeing how arranging trees, plants, and paths helps build depth and make a design feel complete.",
    learning: "I learned to combine, arrange, and layer shapes to build a larger composition."
  },
  {
    id: "activity-9",
    number: "09",
    title: "Tracing Your Character",
    description: "Trace and refine a character using a structured digital process.",
    date: "Date to be added",
    tools: ["Inkscape", "Vector Tracing"],
    images: ["assets/tracing-your-character.png"],
    previewImage: "assets/tracing-your-character-cover.jpg",
    objectives: "Trace a character digitally, refining its outline, shapes, and colors.",
    reflection: "Tracing my character helped me turn a drawing into a clean digital illustration. I learned to follow the outlines carefully and adjust the shapes and colors to keep the character recognizable.",
    learning: "I learned how tracing and refining vector shapes can create a clear, polished character illustration."
  },
  {
    id: "group-3",
    number: "G3",
    title: "House Hunting? Build Your Own!",
    description: "A group-created activity exploring how to build a house design using visual elements and digital tools.",
    date: "Date to be added",
    tools: ["Graphic Design", "Object Manipulation"],
    images: [],
    previewImage: "assets/house-hunting-cover.jpg",
    role: "Lian Mark Ola — Reporter",
    reflection: "As the group's reporter, I helped share and document our activity for others. This role taught me that clear communication and collaboration are important parts of presenting a group's creative work.",
    learning: "I learned to communicate our group's process and contribute by documenting and reporting on the activity."
  },
  {
    id: "group-4",
    number: "G4",
    title: "Create Your Own Design",
    description: "Develop an original design and present it as a complete creative output.",
    date: "Date to be added",
    tools: ["Graphic Design", "Digital Illustration"],
    images: ["assets/create-your-own-design.png"],
    previewImage: "assets/create-your-own-design-cover.jpg",
    objectives: "Create and present an original design using visual elements and a chosen style.",
    reflection: "This activity gave me a chance to bring my own creative idea to life. I learned to make design choices that work together and to keep refining the details until the composition feels complete.",
    learning: "I learned to develop an original visual idea and combine color, shapes, and composition in one design."
  },
  {
    id: "group-5",
    number: "G5",
    title: "Typography Poster",
    description: "Combine type, composition, hierarchy, and visual style in a poster.",
    date: "Date to be added",
    tools: ["Typography", "Graphic Design"],
    images: ["assets/typography-poster.png"],
    previewImage: "assets/typography-poster-cover.jpg",
    objectives: "Design a poster that uses typography, contrast, and layout to present a message clearly.",
    reflection: "Creating this poster helped me see how typography can become the main visual focus of a design. I learned to consider letter style, contrast, and layout so the message stands out.",
    learning: "I learned to use type size, style, and placement to create hierarchy and make a poster message more noticeable."
  },
  {
    id: "group-6",
    number: "G6",
    title: "Create Your Own Logo",
    description: "Explore logo design by combining visual symbols, shapes, and typography into a clear identity.",
    date: "Date to be added",
    tools: ["Logo Design", "Graphic Design"],
    images: ["assets/create-your-own-logo.png"],
    previewImage: "assets/create-your-own-logo-cover.jpg",
    objectives: "Create an original logo concept and consider how its shapes and visual elements communicate an idea.",
    reflection: "This activity helped me bring personal elements together in one logo. I learned to balance the character, crown, and lettering so they work as a single design.",
    learning: "I learned how visual symbols, color, and typography can combine to create a recognizable logo."
  },
  {
    id: "group-7",
    number: "G7",
    title: "Are You Aware?",
    description: "Create a visual awareness design that communicates an important topic or message.",
    date: "Date to be added",
    tools: ["Visual Communication", "Typography", "Graphic Design"],
    images: ["assets/are-you-aware.png"],
    previewImage: "assets/are-you-aware-cover.jpg",
    objectives: "Create an environmental awareness poster using a clear message, visual hierarchy, and imagery that supports the topic.",
    reflection: "This poster encouraged me to think about caring for the environment and how design can help share that message. I used the trees and bold lettering to make the words “The earth is not asking for much” stand out.",
    learning: "I learned how a clear headline, simple imagery, and color can work together to communicate an environmental message."
  }
];

const activityGrid = document.querySelector("#activity-grid");
const galleryGrid = document.querySelector("#gallery-grid");
const modal = document.querySelector("#activity-modal");
const modalContent = document.querySelector("#modal-content");

activityGrid.innerHTML = activities.map((activity) => `
  <article class="activity-card reveal" id="${activity.id}">
    <div class="activity-preview">
      ${activity.previewImage || activity.images.length
        ? `<img class="activity-output-image${activity.previewImage ? " activity-cover-preview" : ""}" src="${activity.previewImage || activity.images[0]}" alt="${activity.title} preview">`
        : `<div class="activity-placeholder" aria-label="${activity.videos && activity.videos.length ? "Video activity preview" : "Artwork output placeholder"}"><i class="fa-solid ${activity.videos && activity.videos.length ? "fa-circle-play" : "fa-image"}"></i><span>${activity.videos && activity.videos.length ? "Playable video inside" : "Artwork preview"}</span></div>`}
      <span class="activity-number">${activity.number}</span>
    </div>
    <div class="activity-info">
      <p class="activity-date">${activity.date}</p>
      <h3>${activity.title}</h3>
      <p>${activity.description}</p>
      <div class="activity-tools">${activity.tools.slice(0, 2).map((tool) => `<span>${tool}</span>`).join("")}</div>
      <button class="view-activity" type="button" data-id="${activity.id}" aria-label="View ${activity.title} activity">View Activity <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </article>
`).join("");

galleryGrid.innerHTML = activities.flatMap((activity) => {
  const media = [
    ...activity.images.map((src) => ({ type: "image", src })),
    ...(activity.videos || []).map((src) => ({ type: "video", src }))
  ];

  if (!media.length) {
    return [`
      <article class="gallery-item reveal">
        <button type="button" class="gallery-placeholder" data-title="${activity.title}" aria-label="${activity.title} output placeholder">
          <i class="fa-solid fa-plus"></i><span>Actual output will appear here</span>
        </button>
        <h3>${activity.title}</h3>
      </article>
    `];
  }

  return media.map((item, index) => `
    <article class="gallery-item reveal">
      ${item.type === "video"
        ? `<video class="gallery-video" controls preload="metadata" playsinline aria-label="${activity.title} video ${index + 1}"><source src="${item.src}" type="video/mp4">Your browser does not support MP4 video.</video>`
        : `<button type="button" class="gallery-output" data-title="${activity.title}" data-image="${item.src}" aria-label="${activity.title}, view artwork ${index + 1}"><img src="${item.src}" alt="${activity.title} submitted artwork ${index + 1}"></button>`}
      <h3>${activity.title}${media.length > 1 ? ` - View ${index + 1}` : ""}</h3>
    </article>
  `);
}).join("");

function openActivity(id) {
  const activity = activities.find((item) => item.id === id);
  if (!activity) return;

  const media = [
    ...activity.images.map((src, index) => `<img class="modal-output-image" src="${src}" alt="${activity.title} submitted artwork ${index + 1}">`),
    ...(activity.videos || []).map((src, index) => `<video class="modal-output-video" controls preload="metadata" playsinline aria-label="${activity.title} video ${index + 1}"><source src="${src}" type="video/mp4">Your browser does not support MP4 video.</video>`)
  ];

  modalContent.innerHTML = `
    <div class="modal-header">
      <p class="eyebrow">Activity ${activity.number}</p>
      <h2 id="modal-title">${activity.title}</h2>
    </div>
    <div class="modal-layout${activity.role ? "" : " modal-layout-media-only"}">
      <div class="modal-output">
        ${media.length
          ? `<div class="modal-output-gallery">${media.join("")}</div>`
          : `<div class="modal-placeholder"><i class="fa-solid fa-palette"></i><span>My actual output will be displayed here</span></div>`}
      </div>
      ${activity.role ? `<div class="modal-details"><section><h3>Group Role</h3><p>${activity.role}</p></section></div>` : ""}
    </div>
    <div class="modal-reflection">
      <div><p class="eyebrow">Personal Reflection</p><p>${activity.reflection || "This reflection space is intentionally left for my own experiences and honest learning notes."}</p></div>
      <div><p class="eyebrow">What I Learned</p><p>${activity.learning || "Add the specific skills, lessons, and improvements gained from this activity."}</p></div>
    </div>
  `;
  modal.showModal();
  document.body.classList.add("modal-open");
}

document.querySelectorAll(".view-activity").forEach((button) => {
  button.addEventListener("click", () => openActivity(button.dataset.id));
});

document.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("close", () => document.body.classList.remove("modal-open"));
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
document.querySelectorAll(".gallery-placeholder, .gallery-output").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.image) {
      lightboxImage.src = button.dataset.image;
      lightboxImage.alt = `${button.dataset.title} submitted artwork`;
      lightbox.classList.remove("placeholder-lightbox");
    } else {
      lightboxImage.removeAttribute("src");
      lightboxImage.alt = `${button.dataset.title} artwork placeholder`;
      lightbox.classList.add("placeholder-lightbox");
    }
    lightbox.showModal();
  });
});
document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("close", () => lightbox.classList.remove("placeholder-lightbox"));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.forEach((item) => item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach((section) => sectionObserver.observe(section));
