import java.util.*;

public class Flight {
    private Integer id;
    private String number;
    private Date arrivalTime;
    private Date departureTime;
    private Status status;
    private Date createdOn;
    private Date updatedOn;

    Flight(String number, Date arrivalTime, Date departureTime) {
        this.number = number;
        this.arrivalTime = arrivalTime;
        this.departureTime = departureTime;
    }

    public String getNumber() {
        return this.number;
    }

    public void setNumber() {
        this.number = number;
    }

    public Date getArrivalTime() {
        this.arrivalTime = arrivalTime;
    }

    public void setArrivalTime(Date arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public Date getDepartuteTime() {
        return this.departureTime;
    }

    public void setDepartureTime() {
        this.departureTime = departureTime;
    }

    public Status getStatus() {
        return this.status;
    }

    public void setStatus() {
        this.status = status;
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