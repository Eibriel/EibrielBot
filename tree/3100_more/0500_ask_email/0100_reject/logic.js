for (var i = 0; i < input_data["intents"].length; i++) {
    intent_id = input_data["intents"][i]["intent"];
    confidence = input_data["intents"][i]["confidence"];
    if ((intent_id == "reject_give_info" || intent_id == "no") && confidence > 0.5) {
        evaluate = true;
    }
}
