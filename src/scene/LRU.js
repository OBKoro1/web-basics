// LRU算法

// LRU数组实现

// 一般解法，维护一个数组，数组元素为key-value键值对对象，每次获取需要遍历数组
// 工厂函数，具有两个属性 capacity 保存限量，cache 保存缓存
let LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = [];
}

// 实现 get 方法
LRUCache.prototype.get = function(key) {
    let index = this.cache.findIndex((item) => item.key === key);
    if (index === -1) {
        return -1;
    }
    // 删除此元素后插入到数组第一项
    let value = this.cache[index].value;
    this.cache.splice(index, 1);
    this.cache.unshift({
        key,
        value,
    });
    return value;
};

// 实现 put 方法
LRUCache.prototype.put = function(key, value) {
    let index = this.cache.findIndex((item) => item.key === key);
    // 想要插入的数据已经存在了，那么直接提升它就可以
    if (index > -1) {
        this.cache.splice(index, 1);
    } else if (this.cache.length >= this.capacity) {
        // 若已经到达最大限制，先淘汰一个最久没有使用的
        this.cache.pop();
    }
    this.cache.unshift({ key, value });
};


// LRU map实现


// 上述代码来自 LRU 缓存机制-官方
// 时间复杂度 O(1)，因为 Map 既能保持键值对，还能记住插入顺序。
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        // 存在即更新
        let temp = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, temp);
        return temp;
    }
    return -1;
};

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        // 存在即更新（删除后加入）
        this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
        // 不存在即加入
        // 缓存超过最大值，则移除最近没有使用的
        // new Map().keys() 返回一个新的 Iterator 对象
        this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
};