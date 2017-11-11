for (var i = 0; i < input_data["intents"].length; i++) {
    if (input_data["intents"][i]["intent"] == "no") {
        evaluate = true;
        goto = "/3100_more/0300_ask_business"
    }
}
