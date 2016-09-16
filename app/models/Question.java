package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

/**
 * Created by JuanDa on 15/09/2016.
 */
@Entity
public class Question extends utils.Entity implements java.io.Serializable {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "idquestion", unique = true, nullable = false)
    private Integer idquestion;

    @Column(name = "question", length = 5000, nullable = false, unique = false)
    private String question;

    @Column(name = "answer", length = 20000, nullable = false, unique = false)
    private String answer;

    public Integer getIdquestion() {
        return idquestion;
    }

    public void setIdquestion(Integer idquestion) {
        this.idquestion = idquestion;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}
