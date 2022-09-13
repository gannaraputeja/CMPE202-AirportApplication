
public class User {
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Status status;
    private AccountType type;

    public User(String firstname, String lastname, String email, String password, Status status, AccountType type) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.status = status;
        this.type = type;
    }

    public String getFirstname() {
        return this.firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return thi.lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Status getStatus() {
        return this.status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public AccountType getType() {
        return this.type;
    }

    public void setType(AccountType type) {
        this.type = type;
    }


}