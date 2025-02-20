
//Les actions du menu

document.getElementById("menu-button").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Fermer le menu si l'utilisateur clique en dehors
document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var button = document.getElementById("menu-button");
    if (event.target !== menu && event.target !== button) {
        menu.style.display = "none";
    }
});


// Animation d'apparition des articles
document.addEventListener("DOMContentLoaded", function() {
  const articles = document.querySelectorAll('.article');
  articles.forEach((article, index) => {
    article.style.opacity = 0;
    article.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(() => {
      article.style.opacity = 1;
    }, index * 300); // Différer l'animation de chaque article
  });
});
// Liste des articles avec leurs titres et liens
const articles = [
  { title: "Les dernières tendances en IA", link: "article1.html" },
  { title: "L'impact de la 5G sur les technologies", link: "article4.html" },
  { title: "Les gadgets technologiques incontournables", link: "article2.html" },
  { title: "Comment protéger ses données personnelles", link: "article3.html" },
  { title: "Top 5 des smartphones les plus innovants", link: "article5.html" },
  { title: "Introduction aux cryptomonnaies", link: "article6.html" },
  { title: "Les meilleures applications de productivité", link: "article7.html" },
  { title: "Les startups technologiques africaines", link: "article8.html" },
  { title: "La réalité augmentée en 2024", link: "article9.html" },
  { title: "L'énergie renouvelable et la technologie", link: "article10.html" },
  { title:  "Les meilleurs languages de programmation en 2024", link: "langage-progammation.html" }, 
];

// Fonction de recherche
document.getElementById("searchButton").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const result = articles.find(article =>
    article.title.toLowerCase().includes(query)
  );

  if (result) {
    window.location.href = result.link; // Redirige vers l'article trouvé
  } else {
    alert("Aucun article correspondant trouvé.");
  }
});
/*section de getion de la date de publication*/
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner tous les éléments où afficher la date
    let articles = document.querySelectorAll(".article-date");

    // Obtenir la date et l'heure actuelle
    let now = new Date();
    let dateString = now.toLocaleString("fr-FR", { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit'
    });

    // Ajouter la date et l'heure à chaque article
    articles.forEach(article => {
        article.textContent = "Publié le " + dateString;
    });
});

// afficher les erreurs
window.onerror = function(message, source, lineno, colno, error) {
    document.body.innerHTML += `<p style="color: red;">Erreur JS : ${message} (ligne ${lineno})</p>`;
};

