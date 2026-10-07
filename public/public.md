# PUBLIC-README - Diretório Public

Este diretório contém todos os arquivos estáticos da landing page do Charles Personal Trainer.

## 📁 Estrutura do Diretório

```
public/
├── favicon.svg                     # Ícone do site (já existente)
├── robots.txt                      # Instruções para crawlers SEO
├── PUBLIC-README.md                # Este arquivo (documentação geral)
├── images/                         # Diretório de imagens
│   ├── IMAGES-README.md            # Documentação das imagens
│   ├── charles-hero.jpg.md         # Placeholder - foto principal do Charles
│   ├── charles-training.jpg.md     # Placeholder - Charles treinando
│   └── mfit-app-preview.png.md     # Placeholder - preview do app MFit
```

## 🎯 Propósito dos Arquivos

### `favicon.svg` ✅
- **Status**: Já existente
- **Propósito**: Ícone do site no navegador
- **Uso**: Tabs do navegador, bookmarks, PWA

### `robots.txt` ✅
- **Status**: Criado
- **Propósito**: Instruções para mecanismos de busca
- **Conteúdo**: Permite indexação geral, bloqueia página de agradecimento

### `images/` ✅
- **Status**: Estrutura criada
- **Propósito**: Todas as imagens da landing page
- **Organização**: Arquivos .md como placeholders para imagens reais

## 🚀 Próximos Passos

### Imagens para Adicionar
1. **charles-hero.jpg** - Foto principal profissional do Charles
2. **charles-training.jpg** - Charles em ação, treinando
3. **mfit-app-preview.png** - Screenshot do aplicativo MFit

### Arquivos Futuros (Opcional)
- **sitemap.xml** - Mapa do site para SEO
- **manifest.json** - Para funcionalidades PWA
- **sw.js** - Service Worker (se necessário)

## 📊 Otimização e Performance

### Imagens
- **Formato**: JPG para fotos, PNG para interfaces, WebP quando possível
- **Tamanho**: Máximo 200KB por imagem
- **Dimensões**: Otimizadas para diferentes dispositivos
- **Alt Text**: Implementar nas páginas Astro

### SEO
- **robots.txt**: Configurado para otimização de busca
- **Sitemap**: Será gerado automaticamente pelo Astro
- **Meta tags**: Implementar nas páginas

## 🎨 Design System (Referência)

### Paleta de Cores
- **Primária**: #3B82F6 (Azul - Confiança)
- **Secundária**: #10B981 (Verde - Energia)  
- **Accent**: #F59E0B (Laranja - Ação)

### Guidelines de Imagem
- **Profissionalismo**: Fotos de alta qualidade
- **Consistência**: Paleta de cores alinhada
- **Conversão**: Foco na captura de leads

## 🔗 Integrações

### Links Importantes
- **MFit**: https://client.mfitpersonal.com.br/out/signup-link/ODY5NTY=
- **WhatsApp**: +55 27 99622-4175
- **Instagram**: @charlestonpersonaltrainer

### Analytics
- Google Analytics 4 (implementar via Astro)
- Meta Pixel (Facebook/Instagram)
- Formspree para formulários

## 📱 Responsividade

### Breakpoints
- **Mobile**: 320px-768px
- **Tablet**: 768px-1024px  
- **Desktop**: 1024px+

### Otimização
- Imagens responsivas com `<picture>` element
- Lazy loading para performance
- Formatos modernos (WebP) com fallback

---

## 📞 Contato do Projeto

- **Cliente**: Charles Personal Trainer
- **WhatsApp**: +55 27 99622-4175
- **Instagram**: @charlestonpersonaltrainer
- **Site**: https://olavostauros.github.io/charlespersonal.fit/

---

*Boilerplate do diretório /public criado conforme especificações do projeto. Pronto para receber as imagens reais e implementação das páginas Astro.*
