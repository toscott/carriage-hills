class CarriageHillsFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="navbar fixed-bottom bg-dark text-white">
            <div class="container">
                <div class="container">
                    <div class="row py-2">
                        <div class="col-md-6 text-center">Contact us: carriagehillssubdivision@gmail.com</div>
                        <div class="col-md-6 text-center">
                            <a class="light-link" href="https://www.facebook.com/groups/542163793119820">Facebook</a>
                            <a class="light-link" href="https://nextdoor.com/g/xdmvgmtkk">Nextdoor</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
  }
}

customElements.define('carriage-hills-footer-component', CarriageHillsFooter);