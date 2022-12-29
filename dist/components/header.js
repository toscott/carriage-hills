function capitalizeFirstLetter(string) {
  if (string === 'sign') {
      return 'Sign Proposal'
  } else {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

function dynamicallyBuildNavigation(activePage) {

    var links = ["documents", "events", "contact", "sign"]
    let navigationHTML = ""
    let homeListClass = ""
    if (activePage === "home") {
        homeListClass = "active"
    }
    navigationHTML += `
        <li id="home-link" class="${homeListClass}">
            <a href="./" class="nav-link px-2 ">Home</a>
        </li>
    `
    for (let i=0; i < links.length; i++) {
        let linkName = links[i]
        let linkDisplay = capitalizeFirstLetter(linkName)
        let liClass = ""
        if (activePage === linkName) {
            liClass = "active"
        }
        navigationHTML += `
            <li id="${linkName}-link" class=${liClass}>
                <a href="${linkName}.html" class="nav-link px-2">${linkDisplay}</a>
            </li>
        `
    }
    return navigationHTML
}

class CarriageHillsHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    var activePage = this.attributes.activePage.value
    let navigationHTML = dynamicallyBuildNavigation(activePage)
    this.innerHTML = `
    <header class="p-3 bg-dark text-white">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6 text-center site-title">
                    <h4 class="align-middle">Carriage Hills Subdivision</h4>
                </div>
                <div class="col-xs-12 col-md-6 text-center navigation">
                    <ul class="nav mb-2 mb-md-0 text-center">
                        ${navigationHTML}
                    </ul>
                </div>
            </div>
        </div>
    </header>
    `
  }
}

customElements.define('carriage-hills-header-component', CarriageHillsHeader);