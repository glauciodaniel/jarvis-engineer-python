import subprocess

def run_tests():
    """
    Executa os testes automatizados do projeto.
    Assumimos que há um script de testes configurado no package.json.
    """
    print("🧪 Executando testes...")

    try:
        # Primeiro, instale as dependências
        print("📦 Instalando dependências...")
        install_result = subprocess.run(["npm", "install"], capture_output=True, text=True, shell=True)
        print(install_result.stdout)

        if install_result.returncode != 0:
            print("❌ Erro ao instalar dependências.")
            print(install_result.stderr)
            return

        # Em seguida, execute os testes
        print("🧪 Rodando os testes com Jest...")
        test_result = subprocess.run(["npx", "jest"], capture_output=True, text=True, shell=True)

        print("📄 Saída dos testes:")
        print(test_result.stdout)

        if test_result.returncode == 0:
            print("✅ Todos os testes passaram com sucesso.")
        else:
            print("❌ Alguns testes falharam.")
            print(test_result.stderr)

    except FileNotFoundError:
        print("❌ O comando 'npm' ou 'npx' não foi encontrado. Certifique-se de que o Node.js está instalado e no PATH.")
    except Exception as e:
        print(f"❌ Erro ao executar os testes: {e}")