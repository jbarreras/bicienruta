package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Question;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by JuanDa on 16/09/2016.
 */
public class QuestionController extends Controller {

    @Transactional()
    public Result saveAnswer() {

        JsonNode json = request().body().asJson();
        Question res = Json.fromJson(json, Question.class);

        res.save();
        return ok(Json.toJson("inserto"));
    }

    @Transactional()
    public Result getAnswers() {

        Object entity = null;
        try {
            entity = Question.findAll(Question.class);
            return ok(Json.toJson(entity));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ok(Json.toJson("error"));
    }
}
