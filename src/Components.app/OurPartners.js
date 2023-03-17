import React from 'react'

export default function OurPartners() {
  return (
    <div>
        <section class="partnerships">
        <div class="partners">
            <h2 class=" partner-title text-center">Our Partners</h2><br />
            <div class="partners-logo">
                <div class="individual-partner">
                    <div class="partner1 partnerN">
                        <img src={require("../assets/img/partners/agridiv_logo_with_ring.png")}/>
                    </div>
                    <div class="partner2 partnerN">
                    <img src={require("../assets/img/partners/aquarapha_logo.png")}/>
                    </div>
                    <div class="partner3 partnerN">
                    <img src={require("../assets/img/partners/cbn_logo.png")}/>
                    </div>
                    <div class="partner4 partnerN">
                    <img src={require("../assets/img/partners/cocacola.png")}/>
                    </div>
                    <div class="partner5 partnerN">
                    <img src={require("../assets/img/partners/nbl_logo.png")}/>
                    </div>
                    <div class="partner6 partnerN">
                    <img src={require("../assets/img/partners/sabmiller.png")}/>
                    </div>
                    <div class="partner7 partnerN">
                    <img src={require("../assets/img/partners/zenith_bank1.png")}/>
                    </div>
                    <div class="partner7 partnerN">
                    <img src={require("../assets/img/partners/mazaltov_logo1.png")}/>
                    </div>

                </div>
            </div>
        </div>

    </section>
    </div>
  )
}
