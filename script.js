/* ==========================================================================
   AsiaTorta - Motor Interactivo y Lógica de Negocio
   Carrito de compras, Catálogo, Carrusel, Filtros y Pasarela Simulada
   ========================================================================== */

// Catálogo completo de platillos
const PRODUCTOS = [
  {
    id: 1,
    nombre: "Asiatorta Imperial de Pork Belly",
    categoria: "tortas",
    precio: 145,
    precioAnterior: 165,
    imagen: "resources/torta.jpg",
    rating: 5.0,
    resenas: 240,
    etiqueta: "⭐ LA ORIGINAL ASIATORTA",
    descripcion: "¡Tu comida asiática... en un bolillo! Crujiente pork belly glaseado al wok en salsa hoisin y cinco especias chinas, servido dentro de un bolillo tradicional mexicano con vegetales encurtidos, pepino, cilantro y mayonesa de sriracha.",
    ingredientes: ["Pork Belly braseado 180g", "Bolillo mexicano crujiente", "Daikon y zanahoria encurtidos", "Sriracha mayo artesanal", "Cilantro y jalapeño fresco"],
    esPopular: true,
    esPicante: true,
    esVeggie: false
  },
  {
    id: 2,
    nombre: "Tonkotsu Ramen Tradicional",
    categoria: "ramen",
    precio: 175,
    precioAnterior: 195,
    imagen: "resources/ramen.jpg",
    rating: 4.9,
    resenas: 312,
    etiqueta: "🔥 RECOMENDADO DEL CHEF",
    descripcion: "Caldo de cerdo cocido a fuego lento durante 18 horas, fideos alcalinos frescos, rebanadas de chashu tierno, ajitsuke tamago (huevo marinado), naruto, alga nori y cebollín verde.",
    ingredientes: ["Caldo Tonkotsu 18h", "Chashu de cerdo", "Huevo marinando 24h", "Fideos ramen frescos", "Alga nori y cebollín"],
    esPopular: true,
    esPicante: false,
    esVeggie: false
  },
  {
    id: 3,
    nombre: "Dragon Roll Imperial & Salmón",
    categoria: "sushi",
    precio: 185,
    precioAnterior: 210,
    imagen: "resources/sushi.jpg",
    rating: 4.8,
    resenas: 185,
    etiqueta: "🍣 PREMIUM ROLL",
    descripcion: "Rollo de sushi relleno de camarón tempura y queso crema, cubierto con láminas de salmón fresco flameado, láminas de aguacate, salsa de anguila dulce y semillas de ajonjolí tostado.",
    ingredientes: ["Salmón fresco noruego", "Camarón tempura", "Aguacate hass", "Queso crema", "Salsa dulce de anguila"],
    esPopular: true,
    esPicante: false,
    esVeggie: false
  },
  {
    id: 4,
    nombre: "Gyozas Doradas al Wok (6 pzas)",
    categoria: "baos",
    precio: 95,
    precioAnterior: 110,
    imagen: "resources/gyozas.jpg",
    rating: 4.9,
    resenas: 164,
    etiqueta: "🥟 CRUJIENTES Y JUGOSAS",
    descripcion: "Empanadillas japonesas artesanales rellenas de cerdo especiado, col china y jengibre fresco. Selladas a la plancha hasta quedar doradas y servidas con salsa de soya ponzu cítrica.",
    ingredientes: ["Cerdo molido sazonado", "Col china y jengibre", "Masa artesanal", "Salsa ponzu de soya y sésamo"],
    esPopular: true,
    esPicante: false,
    esVeggie: false
  },
  {
    id: 5,
    nombre: "Bao Buns al Vapor de Cerdo (3 pzas)",
    categoria: "baos",
    precio: 115,
    precioAnterior: 130,
    imagen: "resources/pan al vapor.jpg",
    rating: 4.7,
    resenas: 142,
    etiqueta: "☁️ TEXTURA NUBE",
    descripcion: "Panecillos esponjosos tradicionales al vapor rellenos de carne deshebrada agridulce, cebollitas encurtidas, cacahuate tostado y reducción de salsa de ciruela china.",
    ingredientes: ["Pan bao al vapor", "Cerdo braseado dulce", "Cebollas moradas curtidas", "Cacahuate molido tostado"],
    esPopular: false,
    esPicante: false,
    esVeggie: false
  },
  {
    id: 6,
    nombre: "Pollo Crujiente Agridulce Oriental",
    categoria: "arroz",
    precio: 155,
    precioAnterior: 170,
    imagen: "resources/pollo.jpg",
    rating: 4.8,
    resenas: 198,
    etiqueta: "🍗 FAVORITO CRUJIENTE",
    descripcion: "Bocados de pechuga de pollo rebozados con doble fritura crujiente, bañados en salsa agridulce de mandarina y sésamo con pimientos salteados al fuego vivo.",
    ingredientes: ["Pollo crujiente marinado", "Salsa agridulce casera", "Pimientos tricolor", "Ajonjolí tostado blanco y negro"],
    esPopular: true,
    esPicante: false,
    esVeggie: false
  },
  {
    id: 7,
    nombre: "Chaufa Wok Especial con Camarones",
    categoria: "arroz",
    precio: 140,
    precioAnterior: 155,
    imagen: "resources/arroz.jpg",
    rating: 4.9,
    resenas: 220,
    etiqueta: "🍚 WOK A LA LLAMA",
    descripcion: "Arroz frito al wok con técnica de fuego alto 'wok hei', camarones salteados, trozos de tortilla de huevo, cebollín fresco, brotes de soya y un toque ahumado de aceite de sésamo.",
    ingredientes: ["Arroz jazmín al wok", "Camarones frescos", "Huevo revuelto", "Cebollín y jengibre", "Aceite de sésamo"],
    esPopular: true,
    esPicante: false,
    esVeggie: false
  },
  {
    id: 8,
    nombre: "Taro Boba Bubble Tea Artesanal",
    categoria: "bebidas",
    precio: 75,
    precioAnterior: 85,
    imagen: "resources/bubble_tea.jpg",
    rating: 5.0,
    resenas: 175,
    etiqueta: "🧋 BEBIDA FAVORITA",
    descripcion: "Refrescante té con leche infusionado con taro morado natural, endulzado con miel de caña y perlas de tapioca boba recién cocidas, masticables y caramelizadas.",
    ingredientes: ["Infusión de raíz de taro", "Leche entera o vegetal", "Perlas de tapioca suave", "Miel de piloncillo"],
    esPopular: true,
    esPicante: false,
    esVeggie: true
  }
];

// Estado global de la aplicación
let estado = {
  carrito: [],
  categoriaActual: "todos",
  busqueda: "",
  filtroEspecial: "todos", // 'todos', 'popular', 'picante', 'veggie'
  cupon: null,
  productoSeleccionado: null
};

// ==========================================================================
// Persistencia en LocalStorage
// ==========================================================================
function cargarCarritoDesdeStorage() {
  try {
    const dataGuardada = localStorage.getItem("asiatorta_carrito");
    if (dataGuardada) {
      estado.carrito = JSON.parse(dataGuardada);
    }
  } catch (e) {
    console.error("Error al cargar carrito:", e);
    estado.carrito = [];
  }
}

function guardarCarritoEnStorage() {
  try {
    localStorage.setItem("asiatorta_carrito", JSON.stringify(estado.carrito));
  } catch (e) {
    console.error("Error al guardar carrito:", e);
  }
}

// ==========================================================================
// Funcionalidades del Carrito de Compra
// ==========================================================================
function agregarAlCarrito(productoId, cantidad = 1, notas = "") {
  const producto = PRODUCTOS.find(p => p.id === productoId);
  if (!producto) return;

  const itemExistente = estado.carrito.find(item => item.id === productoId && item.notas === notas);

  if (itemExistente) {
    itemExistente.cantidad += cantidad;
  } else {
    estado.carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      categoria: producto.categoria,
      cantidad: cantidad,
      notas: notas
    });
  }

  guardarCarritoEnStorage();
  actualizarUI();
  animarInsigniaCarrito();
  mostrarToast(`¡${producto.nombre} agregado al carrito!`, "exito");
}

function modificarCantidadCarrito(index, cambio) {
  if (!estado.carrito[index]) return;

  estado.carrito[index].cantidad += cambio;

  if (estado.carrito[index].cantidad <= 0) {
    const nombreEliminado = estado.carrito[index].nombre;
    estado.carrito.splice(index, 1);
    mostrarToast(`Se eliminó ${nombreEliminado}`, "info");
  }

  guardarCarritoEnStorage();
  actualizarUI();
}

function eliminarDelCarrito(index) {
  if (!estado.carrito[index]) return;
  const nombreEliminado = estado.carrito[index].nombre;
  estado.carrito.splice(index, 1);
  guardarCarritoEnStorage();
  actualizarUI();
  mostrarToast(`Eliminado: ${nombreEliminado}`, "info");
}

function vaciarCarrito() {
  if (estado.carrito.length === 0) return;
  if (confirm("¿Estás seguro de que deseas vaciar tu carrito de compras?")) {
    estado.carrito = [];
    guardarCarritoEnStorage();
    actualizarUI();
    mostrarToast("Carrito vaciado", "info");
  }
}

function calcularTotales() {
  const subtotal = estado.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const totalItems = estado.carrito.reduce((acc, item) => acc + item.cantidad, 0);

  // Cálculo de descuento por cupón
  let descuento = 0;
  let envioGratisPorCupon = false;

  if (estado.cupon === "ASIATORTA10") {
    descuento = subtotal * 0.10;
  } else if (estado.cupon === "ENVIOGRATIS") {
    envioGratisPorCupon = true;
  }

  // Regla de envío: gratis con más de $300 o con cupón
  const envioBase = 35;
  const envio = (subtotal === 0 || subtotal >= 300 || envioGratisPorCupon) ? 0 : envioBase;
  const faltanteEnvioGratis = Math.max(0, 300 - subtotal);
  const totalFinal = Math.max(0, subtotal - descuento + envio);

  return {
    subtotal,
    totalItems,
    descuento,
    envio,
    faltanteEnvioGratis,
    totalFinal
  };
}

// ==========================================================================
// Notificaciones Toast
// ==========================================================================
function mostrarToast(mensaje, tipo = "exito") {
  const contenedor = document.getElementById("toast-container");
  if (!contenedor) return;

  const toast = document.createElement("div");
  const colorBorde = tipo === "exito" ? "border-emerald-500 bg-slate-900/95 text-white" :
                     tipo === "error" ? "border-rose-500 bg-slate-900/95 text-white" :
                     "border-amber-500 bg-slate-900/95 text-white";

  const icono = tipo === "exito" ? '<i class="fa-solid fa-circle-check text-emerald-400 text-lg"></i>' :
                tipo === "error" ? '<i class="fa-solid fa-circle-exclamation text-rose-400 text-lg"></i>' :
                '<i class="fa-solid fa-circle-info text-amber-400 text-lg"></i>';

  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border ${colorBorde} backdrop-blur-md transform transition-all duration-300 translate-y-4 opacity-0 pointer-events-auto`;
  toast.innerHTML = `
    ${icono}
    <p class="text-sm font-medium tracking-wide flex-1">${mensaje}</p>
    <button class="text-slate-400 hover:text-white transition-colors" onclick="this.parentElement.remove()">
      <i class="fa-solid fa-xmark text-sm"></i>
    </button>
  `;

  contenedor.appendChild(toast);

  // Animar entrada
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-4", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  });

  // Autodescartar en 3.5 segundos
  setTimeout(() => {
    toast.classList.add("translate-y-4", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function animarInsigniaCarrito() {
  const badge = document.getElementById("cart-badge");
  if (badge) {
    badge.classList.remove("animate-cart-pop");
    void badge.offsetWidth; // Reflow
    badge.classList.add("animate-cart-pop");
  }
}

// ==========================================================================
// Control del Drawer del Carrito
// ==========================================================================
function abrirCarrito() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer || !overlay) return;

  overlay.classList.remove("hidden");
  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    drawer.classList.remove("translate-x-full");
    drawer.classList.add("translate-x-0");
  });
  document.body.style.overflow = "hidden";
}

function cerrarCarrito() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer || !overlay) return;

  drawer.classList.remove("translate-x-0");
  drawer.classList.add("translate-x-full");
  overlay.classList.remove("opacity-100");
  overlay.classList.add("opacity-0");

  setTimeout(() => {
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
  }, 300);
}

// ==========================================================================
// Renderizado del Menú y Tarjetas
// ==========================================================================
function filtrarProductos() {
  return PRODUCTOS.filter(producto => {
    // Filtro por categoría
    const pasaCategoria = estado.categoriaActual === "todos" || producto.categoria === estado.categoriaActual;

    // Filtro por texto de búsqueda
    const texto = estado.busqueda.toLowerCase().trim();
    const pasaBusqueda = !texto ||
      producto.nombre.toLowerCase().includes(texto) ||
      producto.descripcion.toLowerCase().includes(texto) ||
      producto.ingredientes.some(ing => ing.toLowerCase().includes(texto));

    // Filtro especial (popular, picante, veggie)
    let pasaEspecial = true;
    if (estado.filtroEspecial === "popular") pasaEspecial = producto.esPopular;
    if (estado.filtroEspecial === "picante") pasaEspecial = producto.esPicante;
    if (estado.filtroEspecial === "veggie") pasaEspecial = producto.esVeggie;

    return pasaCategoria && pasaBusqueda && pasaEspecial;
  });
}

function renderizarMenu() {
  const contenedor = document.getElementById("menu-grid");
  const contador = document.getElementById("contador-platillos");
  if (!contenedor) return;

  const productosFiltrados = filtrarProductos();

  if (contador) {
    contador.textContent = `${productosFiltrados.length} platillo${productosFiltrados.length === 1 ? '' : 's'} disponible${productosFiltrados.length === 1 ? '' : 's'}`;
  }

  if (productosFiltrados.length === 0) {
    contenedor.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-20 h-20 mx-auto mb-4 bg-slate-800/80 rounded-full flex items-center justify-center text-3xl text-amber-400">
          <i class="fa-solid fa-bowl-food"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">No se encontraron platillos</h3>
        <p class="text-slate-400 max-w-md mx-auto text-sm mb-6">
          No encontramos opciones que coincidan con tu búsqueda "${estado.busqueda}". Prueba explorando otras categorías.
        </p>
        <button onclick="resetearFiltros()" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-colors">
          Restablecer Filtros
        </button>
      </div>
    `;
    return;
  }

  contenedor.innerHTML = productosFiltrados.map(prod => `
    <article class="group relative bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between">
      <div>
        <!-- Imagen y Badges -->
        <div class="relative h-56 overflow-hidden cursor-pointer" onclick="abrirModalProducto(${prod.id})">
          <img 
            src="${prod.imagen}" 
            alt="${prod.nombre}"
            class="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80"></div>
          
          <!-- Badge Superior Izquierdo -->
          <span class="absolute top-3 left-3 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full glass-badge text-amber-300 shadow-md">
            ${prod.etiqueta}
          </span>

          <!-- Botón de Vista Rápida -->
          <button 
            type="button"
            onclick="event.stopPropagation(); abrirModalProducto(${prod.id})" 
            title="Vista rápida e ingredientes"
            class="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white transition-all flex items-center justify-center text-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          >
            <i class="fa-solid fa-eye"></i>
          </button>

          <!-- Badges de características -->
          <div class="absolute bottom-3 left-3 flex items-center gap-1.5 flex-wrap">
            ${prod.esPicante ? '<span class="text-xs bg-red-600/90 text-white font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm"><i class="fa-solid fa-pepper-hot"></i> Picante</span>' : ''}
            ${prod.esVeggie ? '<span class="text-xs bg-emerald-600/90 text-white font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm"><i class="fa-solid fa-leaf"></i> Veggie</span>' : ''}
          </div>
        </div>

        <!-- Información del Platillo -->
        <div class="p-5">
          <div class="flex items-center justify-between mb-1.5">
            <div class="flex items-center text-amber-400 text-xs font-semibold gap-1">
              <i class="fa-solid fa-star text-amber-400"></i>
              <span>${prod.rating}</span>
              <span class="text-slate-500">(${prod.resenas} reseñas)</span>
            </div>
            <span class="text-xs uppercase tracking-wider font-bold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
              ${prod.categoria}
            </span>
          </div>

          <h3 
            class="font-heading font-bold text-lg text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-1 cursor-pointer"
            onclick="abrirModalProducto(${prod.id})"
          >
            ${prod.nombre}
          </h3>

          <p class="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">
            ${prod.descripcion}
          </p>
        </div>
      </div>

      <!-- Pie de Tarjeta con Precio y Botón de Compra -->
      <div class="px-5 pb-5 pt-2 border-t border-slate-800/60 flex items-center justify-between mt-auto">
        <div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-black text-amber-400 tracking-tight">$${prod.precio}</span>
            <span class="text-xs text-slate-500 line-through">$${prod.precioAnterior}</span>
          </div>
          <span class="text-[10px] text-slate-400 uppercase tracking-widest font-medium">MXN</span>
        </div>

        <button 
          onclick="agregarAlCarrito(${prod.id}, 1)"
          class="flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-red-900/30 active:scale-95 transition-all"
        >
          <i class="fa-solid fa-plus"></i>
          <span>Agregar</span>
        </button>
      </div>
    </article>
  `).join("");
}

function resetearFiltros() {
  estado.categoriaActual = "todos";
  estado.busqueda = "";
  estado.filtroEspecial = "todos";

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  actualizarBotonesCategorias();
  actualizarUI();
}

function actualizarBotonesCategorias() {
  document.querySelectorAll(".categoria-btn").forEach(btn => {
    const cat = btn.getAttribute("data-cat");
    if (cat === estado.categoriaActual) {
      btn.className = "categoria-btn px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg shadow-red-900/30 transition-all scale-102";
    } else {
      btn.className = "categoria-btn px-4 py-2 rounded-xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all";
    }
  });

  document.querySelectorAll(".filtro-chip").forEach(chip => {
    const f = chip.getAttribute("data-filtro");
    if (f === estado.filtroEspecial) {
      chip.className = "filtro-chip px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/50 transition-all";
    } else {
      chip.className = "filtro-chip px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white transition-all";
    }
  });
}

// ==========================================================================
// Renderizado de la UI del Carrito
// ==========================================================================
function renderizarCarritoUI() {
  const contenedorItems = document.getElementById("cart-items-container");
  const badge = document.getElementById("cart-badge");
  const badgeHeader = document.getElementById("cart-header-count");
  const subtotalEl = document.getElementById("cart-subtotal");
  const descuentoEl = document.getElementById("cart-descuento");
  const filaDescuento = document.getElementById("cart-fila-descuento");
  const envioEl = document.getElementById("cart-envio");
  const totalEl = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("cart-checkout-btn");
  const vaciarBtn = document.getElementById("cart-vaciar-btn");
  const bannerEnvio = document.getElementById("cart-banner-envio");
  const textoFaltanteEnvio = document.getElementById("cart-faltante-envio");
  const barraProgresoEnvio = document.getElementById("cart-progreso-envio");

  const { subtotal, totalItems, descuento, envio, faltanteEnvioGratis, totalFinal } = calcularTotales();

  // Actualizar badges
  if (badge) {
    badge.textContent = totalItems;
    badge.classList.toggle("hidden", totalItems === 0);
  }
  if (badgeHeader) {
    badgeHeader.textContent = `(${totalItems} item${totalItems === 1 ? '' : 's'})`;
  }

  // Carrito vacío
  if (estado.carrito.length === 0) {
    if (contenedorItems) {
      contenedorItems.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center p-8 text-center text-slate-400">
          <div class="w-24 h-24 mb-4 rounded-full bg-slate-800/60 flex items-center justify-center text-4xl text-amber-400/60">
            <i class="fa-solid fa-basket-shopping"></i>
          </div>
          <h4 class="text-lg font-bold text-white mb-2">Tu carrito está vacío</h4>
          <p class="text-sm max-w-xs text-slate-400 mb-6">
            ¡Agrega tus platillos favoritos del menú para disfrutar del mejor sabor asiático en tu hogar!
          </p>
          <button onclick="cerrarCarrito()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-sm shadow-lg hover:shadow-red-900/40 transition-all">
            Explorar Menú
          </button>
        </div>
      `;
    }
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.classList.add("opacity-50", "cursor-not-allowed");
    }
    if (vaciarBtn) vaciarBtn.classList.add("hidden");
    if (bannerEnvio) bannerEnvio.classList.add("hidden");
  } else {
    if (vaciarBtn) vaciarBtn.classList.remove("hidden");
    if (checkoutBtn) {
      checkoutBtn.disabled = false;
      checkoutBtn.classList.remove("opacity-50", "cursor-not-allowed");
    }

    // Banner de envío gratis
    if (bannerEnvio) {
      bannerEnvio.classList.remove("hidden");
      if (envio === 0) {
        if (textoFaltanteEnvio) textoFaltanteEnvio.innerHTML = '<span class="text-emerald-400 font-bold">¡Felicidades! Tienes Envío Gratis 🎉</span>';
        if (barraProgresoEnvio) barraProgresoEnvio.style.width = "100%";
      } else {
        if (textoFaltanteEnvio) textoFaltanteEnvio.innerHTML = `Agrega <strong class="text-amber-400 font-bold">$${faltanteEnvioGratis} MXN</strong> más para tener <strong>Envío Gratis</strong>`;
        const pct = Math.min(100, Math.round((subtotal / 300) * 100));
        if (barraProgresoEnvio) barraProgresoEnvio.style.width = `${pct}%`;
      }
    }

    // Listar items
    if (contenedorItems) {
      contenedorItems.innerHTML = estado.carrito.map((item, index) => `
        <div class="flex items-center gap-3.5 p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all">
          <img src="${item.imagen}" alt="${item.nombre}" class="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-slate-800" />
          
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-2">
              <h5 class="text-sm font-bold text-white truncate">${item.nombre}</h5>
              <button onclick="eliminarDelCarrito(${index})" class="text-slate-500 hover:text-rose-400 transition-colors p-1" title="Eliminar">
                <i class="fa-regular fa-trash-can text-xs"></i>
              </button>
            </div>

            ${item.notas ? `<p class="text-[11px] text-amber-300/80 italic truncate mt-0.5"><i class="fa-regular fa-comment-dots mr-1"></i>"${item.notas}"</p>` : ''}

            <div class="flex items-center justify-between mt-2">
              <span class="text-sm font-bold text-amber-400">$${item.precio * item.cantidad} <span class="text-[10px] text-slate-500 font-normal">($${item.precio} c/u)</span></span>
              
              <div class="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
                <button onclick="modificarCantidadCarrito(${index}, -1)" class="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors text-xs font-bold">
                  <i class="fa-solid fa-minus text-[10px]"></i>
                </button>
                <span class="w-7 text-center text-xs font-bold text-white">${item.cantidad}</span>
                <button onclick="modificarCantidadCarrito(${index}, 1)" class="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors text-xs font-bold">
                  <i class="fa-solid fa-plus text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join("");
    }
  }

  // Precios desglosados
  if (subtotalEl) subtotalEl.textContent = `$${subtotal} MXN`;
  if (envioEl) envioEl.textContent = envio === 0 ? "GRATIS" : `$${envio} MXN`;
  if (envioEl) {
    if (envio === 0) {
      envioEl.className = "text-sm font-bold text-emerald-400";
    } else {
      envioEl.className = "text-sm font-bold text-slate-200";
    }
  }

  if (filaDescuento && descuentoEl) {
    if (descuento > 0) {
      filaDescuento.classList.remove("hidden");
      descuentoEl.textContent = `-$${descuento.toFixed(0)} MXN`;
    } else {
      filaDescuento.classList.add("hidden");
    }
  }

  if (totalEl) totalEl.textContent = `$${totalFinal.toFixed(0)} MXN`;
}

function aplicarCupon() {
  const inputCupon = document.getElementById("cupon-input");
  const mensajeCupon = document.getElementById("cupon-mensaje");
  if (!inputCupon) return;

  const codigo = inputCupon.value.trim().toUpperCase();

  if (!codigo) {
    mostrarToast("Por favor ingresa un código de cupón", "error");
    return;
  }

  if (codigo === "ASIATORTA10") {
    estado.cupon = codigo;
    if (mensajeCupon) {
      mensajeCupon.className = "text-xs text-emerald-400 font-semibold mt-1";
      mensajeCupon.textContent = "¡Cupón ASIATORTA10 aplicado! 10% de descuento.";
    }
    mostrarToast("¡Descuento del 10% aplicado!", "exito");
  } else if (codigo === "ENVIOGRATIS") {
    estado.cupon = codigo;
    if (mensajeCupon) {
      mensajeCupon.className = "text-xs text-emerald-400 font-semibold mt-1";
      mensajeCupon.textContent = "¡Cupón ENVIOGRATIS aplicado! Tu envío es gratis.";
    }
    mostrarToast("¡Envío gratis aplicado!", "exito");
  } else {
    mostrarToast("Cupón inválido o expirado (Prueba: ASIATORTA10 o ENVIOGRATIS)", "error");
    if (mensajeCupon) {
      mensajeCupon.className = "text-xs text-rose-400 font-semibold mt-1";
      mensajeCupon.textContent = "Cupón no reconocido. Prueba ASIATORTA10.";
    }
    return;
  }

  renderizarCarritoUI();
}

// ==========================================================================
// Modal de Detalle de Producto / Vista Rápida
// ==========================================================================
function abrirModalProducto(id) {
  const prod = PRODUCTOS.find(p => p.id === id);
  if (!prod) return;

  estado.productoSeleccionado = prod;

  const modal = document.getElementById("modal-producto");
  if (!modal) return;

  document.getElementById("modal-prod-img").src = prod.imagen;
  document.getElementById("modal-prod-img").alt = prod.nombre;
  document.getElementById("modal-prod-titulo").textContent = prod.nombre;
  document.getElementById("modal-prod-badge").textContent = prod.etiqueta;
  document.getElementById("modal-prod-rating").textContent = `${prod.rating} (${prod.resenas} opiniones)`;
  document.getElementById("modal-prod-desc").textContent = prod.descripcion;
  document.getElementById("modal-prod-precio").textContent = `$${prod.precio} MXN`;
  document.getElementById("modal-prod-precio-ant").textContent = `$${prod.precioAnterior} MXN`;

  const cantInput = document.getElementById("modal-prod-cantidad");
  if (cantInput) cantInput.value = "1";

  const notasInput = document.getElementById("modal-prod-notas");
  if (notasInput) notasInput.value = "";

  const listaIngredientes = document.getElementById("modal-prod-ingredientes");
  if (listaIngredientes) {
    listaIngredientes.innerHTML = prod.ingredientes.map(ing => `
      <li class="flex items-center gap-2 text-xs text-slate-300">
        <i class="fa-solid fa-check text-emerald-400 text-[10px]"></i>
        <span>${ing}</span>
      </li>
    `).join("");
  }

  modal.classList.remove("hidden");
  requestAnimationFrame(() => {
    modal.classList.remove("opacity-0");
    modal.classList.add("opacity-100");
  });
  document.body.style.overflow = "hidden";
}

function cerrarModalProducto() {
  const modal = document.getElementById("modal-producto");
  if (!modal) return;

  modal.classList.remove("opacity-100");
  modal.classList.add("opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }, 250);
}

function confirmarAgregarDesdeModal() {
  if (!estado.productoSeleccionado) return;

  const cantInput = document.getElementById("modal-prod-cantidad");
  const notasInput = document.getElementById("modal-prod-notas");

  const cantidad = parseInt(cantInput ? cantInput.value : 1) || 1;
  const notas = notasInput ? notasInput.value.trim() : "";

  agregarAlCarrito(estado.productoSeleccionado.id, cantidad, notas);
  cerrarModalProducto();
}

function cambiarCantidadModal(delta) {
  const input = document.getElementById("modal-prod-cantidad");
  if (!input) return;
  let valor = parseInt(input.value) || 1;
  valor = Math.max(1, valor + delta);
  input.value = valor;
}

// ==========================================================================
// Pasarela de Pago Simulada (Checkout)
// ==========================================================================
function abrirCheckout() {
  if (estado.carrito.length === 0) return;

  cerrarCarrito();

  const modalCheckout = document.getElementById("modal-checkout");
  if (!modalCheckout) return;

  const { subtotal, descuento, envio, totalFinal } = calcularTotales();

  const resumenCheckout = document.getElementById("checkout-resumen-items");
  if (resumenCheckout) {
    resumenCheckout.innerHTML = estado.carrito.map(item => `
      <div class="flex justify-between items-center text-xs py-1 text-slate-300">
        <span>${item.cantidad}x ${item.nombre}</span>
        <span class="font-bold text-white">$${item.precio * item.cantidad}</span>
      </div>
    `).join("");
  }

  document.getElementById("checkout-total-pagar").textContent = `$${totalFinal.toFixed(0)} MXN`;

  modalCheckout.classList.remove("hidden");
  requestAnimationFrame(() => {
    modalCheckout.classList.remove("opacity-0");
    modalCheckout.classList.add("opacity-100");
  });
  document.body.style.overflow = "hidden";
}

function cerrarCheckout() {
  const modalCheckout = document.getElementById("modal-checkout");
  if (!modalCheckout) return;

  modalCheckout.classList.remove("opacity-100");
  modalCheckout.classList.add("opacity-0");
  setTimeout(() => {
    modalCheckout.classList.add("hidden");
    document.body.style.overflow = "";
  }, 250);
}

function procesarPedido(event) {
  event.preventDefault();

  const form = document.getElementById("checkout-form");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const nombre = document.getElementById("checkout-nombre").value;
  const telefono = document.getElementById("checkout-telefono").value;
  const direccion = document.getElementById("checkout-direccion").value;
  const metodoPago = document.querySelector('input[name="metodo-pago"]:checked')?.value || "Efectivo";

  const numOrden = Math.floor(1000 + Math.random() * 9000);
  const { totalFinal } = calcularTotales();

  // Cerrar checkout y abrir confirmación
  cerrarCheckout();

  setTimeout(() => {
    abrirConfirmacionPedido(numOrden, nombre, totalFinal, metodoPago, direccion);
    // Vaciar carrito tras compra exitosa
    estado.carrito = [];
    estado.cupon = null;
    guardarCarritoEnStorage();
    actualizarUI();
  }, 300);
}

function abrirConfirmacionPedido(numOrden, cliente, total, metodo, direccion) {
  const modalExito = document.getElementById("modal-exito");
  if (!modalExito) return;

  document.getElementById("exito-orden-id").textContent = `#AT-${numOrden}`;
  document.getElementById("exito-cliente").textContent = cliente;
  document.getElementById("exito-total").textContent = `$${total.toFixed(0)} MXN (${metodo})`;
  document.getElementById("exito-direccion").textContent = direccion;

  modalExito.classList.remove("hidden");
  requestAnimationFrame(() => {
    modalExito.classList.remove("opacity-0");
    modalExito.classList.add("opacity-100");
  });
  document.body.style.overflow = "hidden";
}

function cerrarModalExito() {
  const modalExito = document.getElementById("modal-exito");
  if (!modalExito) return;

  modalExito.classList.remove("opacity-100");
  modalExito.classList.add("opacity-0");
  setTimeout(() => {
    modalExito.classList.add("hidden");
    document.body.style.overflow = "";
  }, 250);
}

// ==========================================================================
// Carrusel Moderno Interactivo
// ==========================================================================
let indiceCarrusel = 0;
let carruselIntervalo = null;

const SLIDES_CARRUSEL = [
  {
    titulo: "¡Tu comida asiática... en un bolillo!",
    subtitulo: "Sabor Mexa-Asiático para llevar & a domicilio. El rótulo oficial de la esquina donde el bolillo crujiente se encuentra con el wok.",
    tag: "IMAGEN OFICIAL DE LA CASA",
    imagen: "resources/principal_rotulo.jpg",
    productoId: 1
  },
  {
    titulo: "Asiatorta Imperial de Pork Belly",
    subtitulo: "Crujiente pork belly glaseado con cinco especias chinas y encurtidos dentro de un bolillo tradicional recién horneado.",
    tag: "PLATILLO ESTRELLA",
    imagen: "resources/torta.jpg",
    productoId: 1
  },
  {
    titulo: "Tonkotsu Ramen Artesanal",
    subtitulo: "Caldo de 18 horas de cocción y fideos frescos al dente con chashu tierno.",
    tag: "100% AUTÉNTICO",
    imagen: "resources/ramen.jpg",
    productoId: 2
  },
  {
    titulo: "Gyozas Doradas al Wok",
    subtitulo: "Crujientes por fuera, jugosas por dentro servidas con salsa ponzu cítrica.",
    tag: "ENTRADA IMPERDIBLE",
    imagen: "resources/gyozas.jpg",
    productoId: 4
  },
  {
    titulo: "Ricos Licuados & Boba Teas",
    subtitulo: "Jugos fusión, cócteles de frutas tropicales y bubble tea con perlas caramelizadas.",
    tag: "BEBIDAS Y JUGOS FUSIÓN",
    imagen: "resources/bubble_tea.jpg",
    productoId: 8
  }
];

function inicializarCarrusel() {
  const contenedorSlides = document.getElementById("carrusel-slides");
  const contenedorDots = document.getElementById("carrusel-dots");
  if (!contenedorSlides) return;

  contenedorSlides.innerHTML = SLIDES_CARRUSEL.map((slide, idx) => `
    <div class="carrusel-slide min-w-full relative h-[420px] md:h-[500px] flex items-center">
      <img src="${slide.imagen}" alt="${slide.titulo}" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent"></div>
      
      <div class="relative z-10 max-w-xl p-8 md:p-14">
        <span class="inline-block text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-red-600/90 text-white mb-3 shadow-lg">
          ${slide.tag}
        </span>
        <h2 class="font-heading text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3">
          ${slide.titulo}
        </h2>
        <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-6 max-w-md">
          ${slide.subtitulo}
        </p>
        <div class="flex items-center gap-4">
          <button onclick="agregarAlCarrito(${slide.productoId}, 1)" class="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm shadow-xl shadow-red-900/40 active:scale-95 transition-all flex items-center gap-2">
            <i class="fa-solid fa-cart-plus"></i>
            <span>Pedir Ahora</span>
          </button>
          <button onclick="abrirModalProducto(${slide.productoId})" class="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 backdrop-blur-md transition-all">
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  `).join("");

  if (contenedorDots) {
    contenedorDots.innerHTML = SLIDES_CARRUSEL.map((_, idx) => `
      <button onclick="irASlide(${idx})" class="dot-carrusel h-2.5 rounded-full transition-all duration-300 ${idx === 0 ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/40 hover:bg-white/70'}" title="Slide ${idx + 1}"></button>
    `).join("");
  }

  iniciarAutoCarrusel();
}

function actualizarCarrusel() {
  const tira = document.getElementById("carrusel-slides");
  if (!tira) return;

  tira.style.transform = `translateX(-${indiceCarrusel * 100}%)`;

  const dots = document.querySelectorAll(".dot-carrusel");
  dots.forEach((dot, idx) => {
    if (idx === indiceCarrusel) {
      dot.className = "dot-carrusel h-2.5 rounded-full transition-all duration-300 w-8 bg-amber-400";
    } else {
      dot.className = "dot-carrusel h-2.5 rounded-full transition-all duration-300 w-2.5 bg-white/40 hover:bg-white/70";
    }
  });
}

function mover(direccion) {
  indiceCarrusel += direccion;
  if (indiceCarrusel >= SLIDES_CARRUSEL.length) {
    indiceCarrusel = 0;
  }
  if (indiceCarrusel < 0) {
    indiceCarrusel = SLIDES_CARRUSEL.length - 1;
  }
  actualizarCarrusel();
}

function irASlide(idx) {
  indiceCarrusel = idx;
  actualizarCarrusel();
}

function iniciarAutoCarrusel() {
  detenerAutoCarrusel();
  carruselIntervalo = setInterval(() => {
    mover(1);
  }, 5000);
}

function detenerAutoCarrusel() {
  if (carruselIntervalo) {
    clearInterval(carruselIntervalo);
    carruselIntervalo = null;
  }
}

// ==========================================================================
// Menú Móvil
// ==========================================================================
function toggleMenuMovil() {
  const menu = document.getElementById("mobile-menu");
  if (!menu) return;
  menu.classList.toggle("hidden");
}

// ==========================================================================
// Actualización General de la UI
// ==========================================================================
function actualizarUI() {
  renderizarMenu();
  renderizarCarritoUI();
}

// ==========================================================================
// Event Listeners e Inicialización
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  cargarCarritoDesdeStorage();
  inicializarCarrusel();
  renderizarMenu();
  renderizarCarritoUI();

  // Listeners para el carrusel (pausa en hover)
  const carruselContenedor = document.getElementById("carrusel-contenedor");
  if (carruselContenedor) {
    carruselContenedor.addEventListener("mouseenter", detenerAutoCarrusel);
    carruselContenedor.addEventListener("mouseleave", iniciarAutoCarrusel);
  }

  // Listener del buscador
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      estado.busqueda = e.target.value;
      renderizarMenu();
    });
  }

  // Listeners de categorías
  document.querySelectorAll(".categoria-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      estado.categoriaActual = btn.getAttribute("data-cat");
      actualizarBotonesCategorias();
      renderizarMenu();
    });
  });

  // Listeners de filtros rápidos (chips)
  document.querySelectorAll(".filtro-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      estado.filtroEspecial = chip.getAttribute("data-filtro");
      actualizarBotonesCategorias();
      renderizarMenu();
    });
  });

  // Listener para cerrar modal con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cerrarCarrito();
      cerrarModalProducto();
      cerrarCheckout();
      cerrarModalExito();
    }
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar-principal");
    if (navbar) {
      if (window.scrollY > 30) {
        navbar.classList.add("shadow-2xl", "bg-slate-950/95");
      } else {
        navbar.classList.remove("shadow-2xl");
      }
    }
  });
});