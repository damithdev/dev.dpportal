function CardPayment() {
    // var dialog = document.createElement("cardDialog");
    // dialog.setAttribute("id", "card_container");
    // var content =document.write("<dialog id='myDialog'><div>Please enter your payment details:</div><h3>Credit Card</h3><div>Card Number:<input type='text' id='card-number' class='input-field' title='card number' aria-label='enter your card number' value='' tabindex='1' readonly></div><div>Expiry Month:<input type='text' id='expiry-month' class='input-field' title='expiry month' aria-label='two digit expiry month' value='' tabindex='2' readonly></div><div>Expiry Year:<input type='text' id='expiry-year' class='input-field' title='expiry year' aria-label='two digit expiry year' value='' tabindex='3' readonly></div><div>Security Code:<input type='text' id='security-code' class='input-field' title='security code' aria-label='three digit CCV security code' value='' tabindex='4' readonly></div><div>Cardholder Name:<input type='text' id='cardholder-name' class='input-field' title='cardholder name' aria-label='enter name on card' value='' tabindex='5' readonly></div><div><button id='payButton' onclick='pay('card')'>Pay Now</button></div></dialog>");
    // document.getElementById("card_container").innerHTML +=("<dialog id='myDialog'><div>Please enter your payment details:</div><h3>Credit Card</h3><div>Card Number:<input type='text' id='card-number' class='input-field' title='card number' aria-label='enter your card number' value='' tabindex='1' readonly></div><div>Expiry Month:<input type='text' id='expiry-month' class='input-field' title='expiry month' aria-label='two digit expiry month' value='' tabindex='2' readonly></div><div>Expiry Year:<input type='text' id='expiry-year' class='input-field' title='expiry year' aria-label='two digit expiry year' value='' tabindex='3' readonly></div><div>Security Code:<input type='text' id='security-code' class='input-field' title='security code' aria-label='three digit CCV security code' value='' tabindex='4' readonly></div><div>Cardholder Name:<input type='text' id='cardholder-name' class='input-field' title='cardholder name' aria-label='enter name on card' value='' tabindex='5' readonly></div><div><button id='payButton' onclick='pay('card')'>Pay Now</button></div></dialog>");
    document.getElementById("card_container").innerHTML = (
        '<dialog id="cardDialog">' +
        '<div class="credit-card">' +
        '<div class="form-header">' +
        '<button class="close-btn" onclick="closeDialog()"><span >&times;</span></button>' +
        '<h4 class="title">Card Details' +
        '</h4>' +

        '</div>' +
        '<div class="form-body">' +
        //    '<label for="card-number" class="cardFont">Card Number </label>'+
        //   '<div '+
        '<input class="card-number input-field form-control" type="text" id="card-number"  placeholder="xxxx-xxxx-xxxx-xxxx" title="card number" aria-label="enter your card number" value="" tabindex="1" readonly maxlength="20" >' +
        // '</div>'+
        '<div class="date-field">' +
        '<div class="month">' +
        '<select name="Month" id="expiry-month">' +
        '<option selected>Month</option>' +
        '<option value="1">1</option>' +
        '<option value="2">2</option>' +
        '<option value="3">3</option>' +
        '<option value="4">4</option>' +
        '<option value="5">5</option>' +
        '<option value="6">6</option>' +
        '<option value="7">7</option>' +
        '<option value="8">8</option>' +
        '<option value="9">9</option>' +
        '<option value="10">10</option>' +
        '<option value="11">11</option>' +
        '<option value="12">12</option>' +
        '</select>' +
        '</div>' +
        '<div class="year">' +
        '<select name="Year" id="expiry-year">' +
        '<option selected>Year</option>' +
        '<option value="19">19</option>' +
        '<option value="20">20</option>' +
        '<option value="21">21</option>' +
        '<option value="22">22</option>' +
        '<option value="23">23</option>' +
        '<option value="24">24</option>' +
        '<option value="25">25</option>' +
        '<option value="26">26</option>' +
        '<option value="27">27</option>' +
        '<option value="28">28</option>' +
        '<option value="29">29</option>' +
        '<option value="30">30</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        //    '<input type="text" id="expiry-month" class="card-number" placeholder="Expiry Month" title="expiry month" aria-label="two digit expiry month" value="" tabindex="2" >'+
        //    '<input type="text" id="expiry-year" class="card-number" placeholder="Expiry Year"  title="expiry year" aria-label="two digit expiry year" value="" tabindex="3" >'+
        //    '<div class="card-verification">'+
        '<div>' +
        '<input  class="cvv-input input-field form-control"  type="text" placeholder="CVV" id="security-code"  title="security code" aria-label="three digit CCV security code" value="" tabindex="4" readonly>' +
        '</div>' +
        // '</div>'+
        '<input type="text" id="cardholder-name" class="card-name" placeholder="Card holder name"   class="input-field form-control" title="cardholder name" aria-label="enter name on card" value="" tabindex="5" >' +
        '<div><img class="img-logo" src="assets/assets/images/mc_vrt_opt_pos_73_3x.png" alt="mastercard">' +        
        '<img class="img-logo" src="assets/assets/images/visa.png" alt="visa"></div>' +        
        '<div>' +
        '<button class="proceed-btn" id="payButton" onclick="pay(' + "'card'" + ');"><a href="#">Proceed</a></button>' +
        '</div>' +
        '</div>' +
        '</div>' + '</dialog>');

    //    if (self === top) {
    //         var antiClickjack = document.getElementById("antiClickjack");
    //         antiClickjack.parentNode.removeChild(antiClickjack);
    //     } else {
    //         top.location = self.location;
    //     }




    //  document.getElementById("cardDialog").showModal();


}

function initialize(callbackFunc) {
    PaymentSession.configure({
        fields: {
            // ATTACH HOSTED FIELDS TO YOUR PAYMENT PAGE FOR A CREDIT CARD
            card: {
                number: "#card-number",
                securityCode: "#security-code",
                expiryMonth: "#expiry-month",
                expiryYear: "#expiry-year",
                nameOnCard: "#cardholder-name"
            }
        },
        //SPECIFY YOUR MITIGATION OPTION HERE
        frameEmbeddingMitigation: ["javascript"],
        callbacks: {
            initialized: function (response) {
                // HANDLE INITIALIZATION RESPONSE
                console.log("card ui initialized");
            },
            formSessionUpdate: function (response) {
                // HANDLE RESPONSE FOR UPDATE SESSION
                var error = "Card adding failed";
                if (response.status) {
                    if ("ok" == response.status) {
                        console.log("Session updated with data: " + response.session.id);

                        console.log("CALLBACK FUNC:", callbackFunc);
                        // callbackFunc.b(true, response.session.id);//remove callback until minfy issue is fixed




                        //check if the security code was provided by the user
                        if (response.sourceOfFunds.provided.card.securityCode) {
                            console.log("Security code was provided.");
                        }

                        //check if the user entered a Mastercard credit card
                        if (response.sourceOfFunds.provided.card.scheme == 'MASTERCARD') {
                            console.log("The user entered a Mastercard credit card.")
                        }
                        localStorage.setItem('sessionId', response.session.id);
                        closeDialog();
                        return;
                    } else if ("fields_in_error" == response.status) {

                        console.log("Session update failed with field errors.");
                        if (response.errors.cardNumber) {
                            console.log("Card number invalid or missing.");
                            error = "Card number invalid or missing.";
                        }
                        if (response.errors.expiryYear) {
                            console.log("Expiry year invalid or missing.");
                            error = "Expiry year invalid or missing.";
                        }
                        if (response.errors.expiryMonth) {
                            console.log("Expiry month invalid or missing.");
                            error = "Expiry month invalid or missing.";
                        }
                        if (response.errors.securityCode) {
                            console.log("Security code invalid.");
                            error = "Security code invalid.";
                        }
                    } else if ("request_timeout" == response.status) {
                        console.log("Session update failed with request timeout: " + response.errors.message);
                        error = "Timeout.";
                    } else if ("system_error" == response.status) {
                        console.log("Session update failed with system error: " + response.errors.message);
                        error = "System error.";
                    }
                } else {
                    console.log("Session update failed: " + response);
                    localStorage.setItem('sessionId', response.session.id);
                }
                localStorage.setItem('cardError', error);
                // callbackFunc(false,error);
            }
        },
        interaction: {
            displayControl: {
                formatCard: "EMBOSSED",
                invalidFieldCharacters: "REJECT"
            }
        }
    });
}

function pay(iii) {
    // UPDATE THE SESSION WITH THE INPUT FROM HOSTED FIELDS
    PaymentSession.updateSessionFromForm('card');
}
function closeDialog() {
    var element = document.getElementById("cardDialog");
    var card_number = document.getElementById("card-number");
    //    var security_code= document.getElementById("security-code");
    card_number.value = "";
    //    security_code.value="";
    element.close();
    localStorage.setItem('cardError', 'cancelled');
    //  
    // document.getElementById("expiry-month").reset();
    // document.getElementById("expiry-year").reset();
    // document.getElementById("cardholder-name").reset();
}
function showCardDialog(common_input) {
    console.log(common_input);

    document.getElementById("cardDialog").showModal();
    // PaymentSession.setFocus('card.number');
    // PaymentSession.setFocus('card.securityCode');
    // PaymentSession.setFocusStyle(["card.number","card.securityCode"], {
    // width: '100%' ,
    // margin:' 20px' ,
    // padding: '12px' ,
    // border: '1px solid #ccc',
    // borderRadius:' 3px'
    // });

    // PaymentSession.setHoverStyle(["card.number","card.securityCode"], {
    //   width: '100%' ,
    console.log("js:show card add dialog")
    initialize(common_input);


    // document.getElementById("cardDialog").showModal();
    //var card_number=document.getElementById("card-number");
    // var security_code=document.getElementById("security-code");

    // card_number.style = " width: 100%;margin:20px;padding:12px; border: 1px solid #ccc;borderRadius:3px ";
    // security_code.style=" width: 100% ; margin:20px;padding:12px; border: '1px solid #ccc';borderRadius:' 3px'";



}