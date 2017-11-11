for (var i = 0; i < input_data["intents"].length; i++) {
    if (input_data["intents"][i]["intent"] == "i_dont_know") {
        evaluate = true;
        goto = "/3100_more/0100_eibriel_introduction/0200_no"
    }
}
