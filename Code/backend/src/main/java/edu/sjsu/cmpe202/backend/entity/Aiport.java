public class Airport {
    private Integer id;
    private String name;
    private Date createdOn;
    private Date updatedOn;

    public Airport(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
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