package br.com.wsoubar.hello.vo;

public class HelloVO {
    
    private String nome;
    private String sobrenome;

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getSobrenome() {
        return sobrenome;
    }
    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }
    
    @Override
    public String toString() {
        StringBuffer sb = new StringBuffer();
        sb.append("*** Nome: "+ getNome()+ " * ");
        sb.append("Sobrenome: " + getSobrenome()+ " ***");
        return sb.toString();
    }
}
