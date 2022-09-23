import java.util.*;

public class BaggageCarousel {

    private Integer id;
    private String number;
    private Status status;
    private Terminal terminal;
    private Date createdOn;
    private Date updatedOn;

    public BaggageCarousel(String number, Status status, Terminal terminal) {
        this.number = number;
        this.status = status;
        this.terminal = terminal;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Status getStatus() {
        return this.status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Terminal getTerminal() {
        return terminal;
    }

    public void setTerminal(Terminal terminal) {
        this.terminal = terminal;
    }

    public Date getCreatedOn() {
        return this.createdOn;
    }

    public Date setCreatedOn() {
        this.createdOn = createdOn;
    }

    public Date getUpdatedOn() {
        return this.updatedOn;
    }

    public Date setUpdatedOn() {
        return this.updatedOn;
    }


}