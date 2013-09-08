/*
   Note that COINBASE_PREORDER_DATA_CODE is the button code from
   coinbase.com/merchant_tools, used for the Preorder Button.  This is
   different from the COINBASE_API key in .env file, which is from
   coinbase.com/account/integrations

   The button code can be shown publicly, while the API key should only be
   included in a .env file and never shown publicly.  The former allows
   people to send you money, the latter allows people to send money from
   your account.

   For FUNDING_UNIT_SYMBOL, we use mBTC to represent 1/1000 of a Bitcoin and
   FUNDING_SI_SCALE for the corresponding multiplier.

   Note that for FUNDING_UNIT_SYMBOL, in theory we could use the Thai Baht
   symbol, but then we'd have to change the font.  If you use another
   payment backend, you can substitute "$" for the dollar or use one of the
   other currency symbols.

    - https://en.bitcoin.it/wiki/Bitcoin_symbol#Existing_Unicode_symbol
    - http://webdesign.about.com/od/localization/l/blhtmlcodes-cur.htm#codes
*/
var Constants = {
  APP_NAME: "Bitstarter", 
  FUNDING_TARGET: 500.00,
  FUNDING_UNIT_SYMBOL: "BTC",
  FUNDING_SI_SCALE: 1,
  FUNDING_END_DATE: new Date("October 8, 2013"),
  PRODUCT_NAME: "Drive Challenge Mobile Game",
  PRODUCT_SHORT_DESCRIPTION: "Donate to the game? It will be Awesome!! ;)",
  TWITTER_USERNAME: "nodejs",
  TWITTER_TWEET: "This student crowdfunder looks interesting.",
  COINBASE_PREORDER_DATA_CODE: "482b77438d90696fe4ba3d03443a09a7",
  days_left: function() {
      return Math.max(Math.ceil((this.FUNDING_END_DATE - new Date()) / (1000*60*60*24)), 0);
  }
};

module.exports = Constants;
