import java.util.*;

public class Terminal {
    private Integer id;
    private String name;
    private List<Gate> gates;
    private Date createdOn;
    private Date updatedOn;

    public Terminal(String name, List<Gate> gates) {
        this.name = name;
        this.gates = gates;
    }

    public String getName() {
        return this.name;
    }

    public void setName(Stirng name) {
        this.name = name;
    }

    public List<Gate> getGates() {
        return this.gates;
    }

    public void setGates(List<Gate> gates) {
        this.gates = gates;
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