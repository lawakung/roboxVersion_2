<template>
    <div class="page">
        <header class="hero">
            <h1>สินค้าโหดๆ — แสดงตัวอย่างแบบดุ</h1>
            <p class="subtitle">คัดมาแรง ดุ จัดเต็ม ทั้งภาพและรายละเอียด</p>
        </header>

        <section class="controls">
            <input v-model="search" placeholder="ค้นหาสินค้า..." />
            <select v-model="sortBy">
                <option value="hot">ฮอตที่สุด</option>
                <option value="price-asc">ราคาต่ำ→สูง</option>
                <option value="price-desc">ราคาสูง→ต่ำ</option>
            </select>
        </section>

        <section class="grid">
            <article v-for="p in filteredAndSorted" :key="p.id" class="card" @click="openPreview(p)">
                <div class="img-wrap">
                    <img :src="p.image" :alt="p.title" />
                    <div class="badge" v-if="p.badge">{{ p.badge }}</div>
                </div>
                <div class="info">
                    <h3 class="title">{{ p.title }}</h3>
                    <p class="desc">{{ p.short }}</p>
                    <div class="meta">
                        <strong class="price">฿{{ p.price.toLocaleString() }}</strong>
                        <button class="btn-ghost" @click.stop="addToCart(p)">ใส่ตะกร้า</button>
                    </div>
                </div>
            </article>
        </section>

        <transition name="fade">
            <div v-if="preview" class="overlay" @click.self="closePreview">
                <div class="modal">
                    <button class="close" @click="closePreview" aria-label="ปิด">✕</button>
                    <div class="modal-body">
                        <img class="big" :src="preview.imageLarge || preview.image" :alt="preview.title" />
                        <div class="details">
                            <h2>{{ preview.title }}</h2>
                            <p class="tagline">{{ preview.tagline }}</p>
                            <p class="long">{{ preview.long }}</p>
                            <div class="buy-row">
                                <div class="price-big">฿{{ preview.price.toLocaleString() }}</div>
                                <div class="actions">
                                    <button class="btn primary" @click="addToCart(preview)">สั่งซื้อด่วน</button>
                                    <button class="btn outline" @click="closePreview">ปิด</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const sortBy = ref('hot')
const preview = ref(null)
const cart = ref([])

const products = ref([
    {
        id: 1,
        title: 'หมวกกันน็อก X-CRUZE',
        short: 'แข็งแรง ดุดัน น้ำหนักเบา',
        long: 'หมวกกันน็อกรุ่น X-CRUZE ทำจากคาร์บอนไฟเบอร์ ให้ความปลอดภัยสูงสุด พร้อมแผ่นระบายอากาศที่ออกแบบเฉพาะทางสำหรับความเร็วสูง',
        price: 2590,
        badge: 'ฮอต',
        image: 'https://picsum.photos/seed/helmet/400/300',
        imageLarge: 'https://picsum.photos/seed/helmet/900/600',
        tagline: 'สุดโหดสำหรับสายสปีด'
    },
    {
        id: 2,
        title: 'รองเท้าบู๊ท Alpha',
        short: 'ทรงพลัง ยึดเกาะเยี่ยม',
        long: 'รองเท้าบู๊ท Alpha ให้การรองรับข้อเท้าและพื้นยางกันลื่น เหมาะกับการใช้งานหนักหรือสตรีทสุดโหด',
        price: 1890,
        badge: 'ใหม่',
        image: 'https://picsum.photos/seed/boots/400/300',
        imageLarge: 'https://picsum.photos/seed/boots/900/600',
        tagline: 'แนวลุยไม่กลัวฝุ่น'
    },
    {
        id: 3,
        title: 'เสื้อแจ็คเก็ต Thunder',
        short: 'เท่ ดุดัน กันลม',
        long: 'แจ็คเก็ตหนังเทียมที่ตัดเย็บประณีต ให้ลุคดิบและปกป้องจากลมได้ดี พร้อมซิปหนาแข็งแรง',
        price: 3290,
        badge: 'แนะนำ',
        image: 'https://picsum.photos/seed/jacket/400/300',
        imageLarge: 'https://picsum.photos/seed/jacket/900/600',
        tagline: 'ล้อคสไตล์ให้ดูโหดขึ้น'
    },
    // เพิ่มตัวอย่างสินค้าได้ตามต้องการ
])

function openPreview(p) {
    preview.value = p
    document.body.style.overflow = 'hidden'
}
function closePreview() {
    preview.value = null
    document.body.style.overflow = ''
}
function addToCart(p) {
    cart.value.push({ ...p, qty: 1 })
    // แจ้งสั้น ๆ ผ่าน console — ปรับเป็น toast ได้ตามต้องการ
    console.log('Added to cart:', p.title)
}

const filteredAndSorted = computed(() => {
    const q = search.value.trim().toLowerCase()
    let list = products.value.filter(p => !q || p.title.toLowerCase().includes(q) || p.short.toLowerCase().includes(q))
    if (sortBy.value === 'price-asc') list = list.slice().sort((a, b) => a.price - b.price)
    if (sortBy.value === 'price-desc') list = list.slice().sort((a, b) => b.price - a.price)
    if (sortBy.value === 'hot') list = list.slice().sort((a, b) => (b.badge === 'ฮอต') - (a.badge === 'ฮอต'))
    return list
})
</script>

<style scoped>
:root{
    --bg:#0b0c10;
    --card:#0f1115;
    --accent:#ff2d55;
    --muted:#9aa1a8;
    --glass: rgba(255,255,255,0.03);
}

.page{
    min-height:100vh;
    background: linear-gradient(180deg, #050507 0%, #0b0c10 60%);
    color:#e6eef6;
    padding:28px;
    font-family: Inter, system-ui, Arial;
}

/* header */
.hero{
    text-align:center;
    margin-bottom:18px;
}
.hero h1{
    margin:0;
    font-size:1.8rem;
    letter-spacing:1px;
    text-transform:uppercase;
    color:var(--accent);
    text-shadow:0 6px 20px rgba(255,45,85,0.08);
}
.subtitle{ color:var(--muted); margin-top:6px; }

/* controls */
.controls{
    display:flex;
    gap:12px;
    justify-content:center;
    margin-bottom:18px;
}
.controls input, .controls select{
    background:var(--glass);
    border:1px solid rgba(255,255,255,0.04);
    color:var(--muted);
    padding:8px 10px;
    border-radius:8px;
    min-width:160px;
}

/* grid */
.grid{
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap:16px;
    max-width:1200px;
    margin:0 auto;
}

.card{
    background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.12));
    border:1px solid rgba(255,255,255,0.03);
    border-radius:12px;
    overflow:hidden;
    cursor:pointer;
    transition:transform .18s ease, box-shadow .18s ease;
    box-shadow: 0 8px 30px rgba(0,0,0,0.6);
}
.card:hover{
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 18px 40px rgba(0,0,0,0.7);
}
.img-wrap{ position:relative; height:140px; overflow:hidden; }
.img-wrap img{ width:100%; height:100%; object-fit:cover; transform:scale(1.05); transition:transform .5s; }
.card:hover .img-wrap img{ transform:scale(1.12) rotate(-1deg); filter:contrast(1.05) saturate(1.05); }

.badge{
    position:absolute; top:10px; left:10px;
    background:linear-gradient(90deg,var(--accent), #ff6b81);
    padding:6px 8px; border-radius:8px; font-weight:700; font-size:.75rem;
    box-shadow:0 6px 18px rgba(255,45,85,0.12);
}

.info{ padding:12px; color:#e7eef7; }
.title{ margin:0 0 6px 0; font-size:1.02rem; }
.desc{ margin:0; color:var(--muted); font-size:.86rem; min-height:36px; }

.meta{ display:flex; align-items:center; justify-content:space-between; margin-top:10px; gap:10px; }
.price{ color:var(--accent); font-size:1.05rem; }
.btn-ghost{
    background:transparent; border:1px solid rgba(255,255,255,0.06); color:var(--muted);
    padding:6px 10px; border-radius:8px; cursor:pointer;
}
.btn-ghost:hover{ border-color:rgba(255,45,85,0.45); color:var(--accent) }

/* overlay modal */
.overlay{
    position:fixed; inset:0; display:flex; align-items:center; justify-content:center;
    background:linear-gradient(180deg, rgba(2,2,2,0.6), rgba(2,2,2,0.85));
    z-index:60;
    padding:24px;
}
.modal{
    width:min(1100px, 96%);
    background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.18));
    border-radius:14px;
    border:1px solid rgba(255,255,255,0.04);
    overflow:hidden;
    position:relative;
    box-shadow: 0 30px 80px rgba(0,0,0,0.8);
}
.close{
    position:absolute; top:10px; right:10px; background:transparent; border:none; color:var(--muted);
    font-size:1.15rem; cursor:pointer;
}
.modal-body{
    display:flex; gap:20px; padding:20px; align-items:stretch;
}
.big{ width:50%; height:420px; object-fit:cover; border-radius:10px; box-shadow:0 12px 40px rgba(0,0,0,0.6); }
.details{ flex:1; color:#f3f7fb; display:flex; flex-direction:column; justify-content:space-between; }
.details h2{ margin:0 0 6px 0; color:var(--accent); }
.tagline{ color:var(--muted); margin-bottom:12px; }
.long{ color:#d6e0ea; line-height:1.5; }

.buy-row{ display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:16px; }
.price-big{ font-size:1.6rem; color:var(--accent); font-weight:800; letter-spacing:0.6px; }
.actions{ display:flex; gap:10px; }

.btn{
    padding:10px 14px; border-radius:10px; cursor:pointer; font-weight:700;
}
.btn.primary{ background:linear-gradient(90deg,var(--accent), #ff6b81); color:#fff; border:none; box-shadow:0 10px 30px rgba(255,45,85,0.12); }
.btn.outline{ background:transparent; border:1px solid rgba(255,255,255,0.06); color:var(--muted); }

.fade-enter-active, .fade-leave-active{ transition: opacity .2s; }
.fade-enter-from, .fade-leave-to{ opacity:0; }

/* responsive */
@media (max-width:900px){
    .modal-body{ flex-direction:column; }
    .big{ width:100%; height:260px; }
}
</style>