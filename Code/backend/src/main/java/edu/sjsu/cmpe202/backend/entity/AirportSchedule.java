public class AirportSchedule {

    private Integer id;
    private Flight flight;
    private Gate gate;
    private Terminal terminal;
    private BaggageCarousel baggageCarousel;

    public AirportSchedule(Flight flight) {
        this.flight = flight;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId() {
        this.id = id;
    }

    public Flight getFlight() {
        return this.flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public Gate getGate() {
        return this.gate;
    }

    public void setGate(Gate gate) {
        this.gate = gate;
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