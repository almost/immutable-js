/* Immutable.js -- WIP Flow Interface file
 *
 * Some notes:
 * So far I've had a difficult time understanding how to implement
 * call signatures that Flow recognizes. Because of this, we have to use
 * the non-recommended way of constructing classes in order for our code
 * to pass through Flow without errors:
 * `var m: Map<string, number> = new Immutable.Map();`
 *
 * As with other classes I believe, the constructor arguments are *not*
 * type checked.
 * So `var m: Map<string, number> = new Immutable.Map({'hello', 'world'});`
 * passes through without errors.
 *
 * For the sake of getting this together more quickly, I've removed the doc
 * comments. Putting them back is essential before pushing something like this
 * out, however, and I'd be happy to do so.
 */

declare module "immutable" {
  declare class Iterable<K, V> {
    static isIterable(maybeIterable: any): boolean;
    static isKeyed(maybeKeyed: any): boolean;
    static isIndexed(maybeIndexed: any): boolean;
    static isAssociative(maybeAssociative: any): boolean;
    static isOrdered(maybeOrdered: any): boolean;

    // constructor(foo: Bar): Baz -- Still wrapping my head around
    // annotating constructors.
    (iterable: Iterable<K, V>): Iterable<K, V>;
    // Was (array: Array<T>) -- Is V a valid type variable to use in its place?
    (array: Array<V>): IndexedIterable<V>;
    (obj: {[key: string]: V}): KeyedIterable<string, V>;
    (iterator: Iterator<V>): IndexedIterable<V>;
    (iterable: Object): IndexedIterable<V>;
    (value: V): IndexedIterable<V>;

    toArray(): Array<V>;
    toIndexedSeq(): IndexedSeq<V>;
    toJS(): any;
    toKeyedSeq(): KeyedSeq<K, V>;
    toMap(): Map<K, V>;
    toObject(): { [key: string]: V };
    toOrderedMap(): Map<K, V>;
    toOrderedSet(): Set<V>;
    toSet(): Set<V>;
    toSetSeq(): SetSeq<V>;
    toSeq(): Seq<K, V>;
    toStack(): Stack<V>;
    toList(): List<V>;
    toString(): string;
    concat(...valuesOrIterables: any[]): Iterable<K, V>;
    contains(value: V): boolean;
    entries(): Iterator<Array<any>>;
    every(
        predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
        context?: any
        ): boolean;
    filter(
        predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
        context?: any
        ): Iterable<K, V>;
    find(
        predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
        context?: any,
        notSetValue?: V
        ): V;
    forEach(
        sideEffect: (value?: V, key?: K, iter?: Iterable<K, V>) => any,
        context?: any
        ): number;
    join(separator?: string): string;
    keys(): Iterator<K>;
    map<M>(
        mapper: (value?: V, key?: K, iter?: Iterable<K, V>) => M,
        context?: any
        ): Iterable<K, M>;
    reduce<R>(
        reducer: (reduction?: R, value?: V, key?: K, iter?: Iterable<K, V>) => R,
        initialReduction?: R,
        context?: any
        ): R;
    reduceRight<R>(
        reducer: (reduction?: R, value?: V, key?: K, iter?: Iterable<K, V>) => R,
        initialReduction?: R,
        context?: any
        ): R;
    reverse(): Iterable<K, V>;
    slice(begin?: number, end?: number): Iterable<K, V>;
    some(
        predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
        context?: any
        ): boolean;
    sort(comparator?: (valueA: V, valueB: V) => number): Iterable<K, V>;
    values(): Iterator<V>;
    butLast(): Iterable<K, V>;
    count(): number;
    count(
        predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
        context?: any
        ): number;
    countBy<G>(
        grouper: (value?: V, key?: K, iter?: Iterable<K, V>) => G,
        context?: any
        ): Map<G, number>;
    equals(other: Iterable<K, V>): boolean;
    entrySeq(): IndexedSeq<Array<any>>;
    filterNot(
        predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
        context?: any
        ): Iterable<K, V>;
    findLast(
        predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
        context?: any,
        notSetValue?: V
        ): V;
    first(): V;
    flatMap<MK, MV>(
        mapper: (value?: V, key?: K, iter?: Iterable<K, V>) => Iterable<MK, MV>,
        context?: any
        ): Iterable<MK, MV>;
    flatMap<MK, MV>(
        mapper: (value?: V, key?: K, iter?: Iterable<K, V>) => any,
        context?: any
        ): Iterable<MK, MV>;
    flatten(depth?: number): Iterable<any, any>;
    flatten(shallow?: boolean): Iterable<any, any>;
    get(key: K, notSetValue?: V): V;
    getIn(searchKeyPath: Array<any>, notSetValue?: any): any;
    getIn(searchKeyPath: Iterable<any, any>, notSetValue?: any): any;
    groupBy<G>(
        grouper: (value?: V, key?: K, iter?: Iterable<K, V>) => G,
        context?: any
        ): KeyedSeq<G, Iterable<K, V>>;
    has(key: K): boolean;
    isSubset(iter: Iterable<any, V>): boolean;
    isSubset(iter: Array<V>): boolean;
    isSuperset(iter: Iterable<any, V>): boolean;
    isSuperset(iter: Array<V>): boolean;
    keySeq(): IndexedSeq<K>;
    last(): V;
    max(comparator?: (valueA: V, valueB: V) => number): V;
    maxBy<C>(
        comparatorValueMapper: (value?: V, key?: K, iter?: Iterable<K, V>) => C,
        comparator?: (valueA: C, valueB: C) => number
        ): V;
    min(comparator?: (valueA: V, valueB: V) => number): V;
    minBy<C>(
        comparatorValueMapper: (value?: V, key?: K, iter?: Iterable<K, V>) => C,
        comparator?: (valueA: C, valueB: C) => number
        ): V;
    rest(): Iterable<K, V>;
    skip(amount: number): Iterable<K, V>;
    skipLast(amount: number): Iterable<K, V>;
    skipWhile(
        predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
        context?: any
        ): Iterable<K, V>;
    skipUntil(
        predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
        context?: any
        ): Iterable<K, V>;
    sortBy<C>(
        comparatorValueMapper: (value?: V, key?: K, iter?: Iterable<K, V>) => C,
        comparator?: (valueA: C, valueB: C) => number
        ): Iterable<K, V>;
    take(amount: number): Iterable<K, V>;
    takeLast(amount: number): Iterable<K, V>;
    takeWhile(
        predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
        context?: any
        ): Iterable<K, V>;
    takeUntil(
        predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
        context?: any
        ): Iterable<K, V>;
    valueSeq(): IndexedSeq<V>;
    size: number;
  }

  declare class SetIterable<T> extends Iterable<T, T> {
    static isSeq(maybeSeq: any): boolean;
    static of<T>(...values: T[]): IndexedSeq<T>;

    (iter: SetIterable<T>): SetIterable<T>;
    (iter: IndexedIterable<T>): SetIterable<T>;
    // Still unsure how to define arbitrary type vars.
    // Was: (iter: KeyedIterable<K, V>): SetIterable<any>;
    (iter: KeyedIterable): SetIterable<any>;
    (array: Array<T>): SetIterable<T>;
    (iterator: Iterator<T>): SetIterable<T>;
    (iterable: Object): SetIterable<T>;

    toSeq(): SetSeq<T>;
  }

  declare class KeyedIterable<K, V> extends Iterable<K, V> {
    (iter: KeyedIterable<K, V>): KeyedIterable<K, V>;
    (iter: Iterable<any, any>): KeyedIterable<K, V>;
    (array: Array<any>): KeyedIterable<K, V>;
    (obj: {[key: string]: V}): KeyedIterable<string, V>;
    (iterator: Iterator<any>): KeyedIterable<K, V>;
    (iterable: Object): KeyedIterable<K, V>;

    toSeq(): KeyedSeq<K, V>;
    flip(): KeyedIterable<V, K>;
    findKey(
        predicate: (value?: V, key?: K, iter?: KeyedIterable<K, V>) => boolean,
        context?: any
        ): K;
    findLastKey(
        predicate: (value?: V, key?: K, iter?: KeyedIterable<K, V>) => boolean,
        context?: any
        ): K;
    keyOf(searchValue: V): K;
    lastKeyOf(searchValue: V): K;
    mapEntries<KM, VM>(
        mapper: (entry?: Array<any>, index?: number, iter?: KeyedIterable<K, V>) => Array<any>,
        context?: any
        ): KeyedIterable<KM, VM>;
    mapKeys<M>(
        mapper: (key?: K, value?: V, iter?: KeyedIterable<K, V>) => M,
        context?: any
        ): KeyedIterable<M, V>;
  }

  declare class IndexedIterable<T> extends Iterable<number, T> {
    (iter: IndexedIterable<T>): IndexedIterable<T>;
    (iter: SetIterable<T>): IndexedIterable<T>;
    // Was: (iter: KeyedIterable<K, V>): IndexedIterable<any>;
    (iter: KeyedIterable): IndexedIterable<any>;
    (array: Array<T>): IndexedIterable<T>;
    (iterator: Iterator<T>): IndexedIterable<T>;
    (iterable: Object): IndexedIterable<T>;

    toSeq(): IndexedSeq<T>;
    findIndex(
        predicate: (value?: T, index?: number, iter?: IndexedIterable<T>) => boolean,
        context?: any
        ): number;
    indexOf(searchValue: T): number;
    lastIndexOf(searchValue: T): number;
    splice(
        index: number,
        removeNum: number,
        ...values: any[]
        ): IndexedIterable<T>;
    findLastIndex(
        predicate: (value?: T, index?: number, iter?: IndexedIterable<T>) => boolean,
        context?: any
        ): number;
    fromEntrySeq(): KeyedSeq<any, any>;
    get(index: number, notSetValue?: T): T;
    interpose(separator: T): IndexedIterable<T>;
  }

  declare class Seq<K, V> extends Iterable<K, V> {
    static isSeq(maybeSeq: any): boolean;
    // Was: static of<T>(...values: T[]): IndexedSeq<T>;
    static of<V>(...values: V[]): IndexedSeq<V>;

    (): Seq<K, V>;
    (seq: Seq<K, V>): Seq<K, V>;
    (iterable: Iterable<K, V>): Seq<K, V>;
    // Was: (array: Array<T>): IndexedSeq<T>;
    (array: Array<V>): IndexedSeq<V>;
    (obj: {[key: string]: V}): KeyedSeq<string, V>;
    // Was: (iterator: Iterator<T>): IndexedSeq<T>;
    (iterator: Iterator<V>): IndexedSeq<V>;
    // Was: (iterable: Object): IndexedSeq<T>;
    (iterable: Object): IndexedSeq<V>;

    cacheResult(): Seq<K, V>;
    size: number;
  }

  declare class KeyedSeq<K, V> extends Seq<K, V>, KeyedIterable<K, V> {
    (): KeyedSeq<K, V>;
    (seq: KeyedIterable<K, V>): KeyedSeq<K, V>;
    (seq: Iterable<any, any>): KeyedSeq<K, V>;
    (array: Array<any>): KeyedSeq<K, V>;
    (obj: {[key: string]: V}): KeyedSeq<string, V>;
    (iterator: Iterator<any>): KeyedSeq<K, V>;
    (iterable: Object): KeyedSeq<K, V>;

    toSeq(): KeyedSeq<K, V>;
  }

  declare class IndexedSeq<T> extends Seq<number, T>, IndexedIterable<T> {
    static of<T>(...values: T[]): IndexedSeq<T>;

    (): IndexedSeq<T>;
    (seq: IndexedIterable<T>): IndexedSeq<T>;
    (seq: SetIterable<T>): IndexedSeq<T>;
    (array: Array<T>): IndexedSeq<T>;
    (iterator: Iterator<T>): IndexedSeq<T>;
    (iterable: Object): IndexedSeq<T>;

    toSeq(): IndexedSeq<T>;
  }

  declare class SetSeq<T> extends Seq<T, T>, SetIterable<T> {
    static of<T>(...values: T[]): SetSeq<T>;

    (): SetSeq<T>;
    (seq: SetIterable<T>): SetSeq<T>;
    (seq: IndexedIterable<T>): SetSeq<T>;
    // Was: (seq: KeyedIterable<K, V>): SetSeq<any>;
    (seq: KeyedIterable): SetSeq<any>;
    (array: Array<T>): SetSeq<T>;
    (iterator: Iterator<T>): SetSeq<T>;
    (iterable: Object): SetSeq<T>;

    toSeq(): SetSeq<T>
  }

  declare class Collection<K, V> extends Iterable<K, V> {
    size: number;
  }

  declare class KeyedCollection<K, V> extends Collection<K, V>, KeyedIterable<K, V> {
    toSeq(): KeyedSeq<K, V>;
  }

  declare class IndexedCollection<T> extends Collection<number, T>, IndexedIterable<T> {
    toSeq(): IndexedSeq<T>;
  }

  declare class SetCollection<T> extends Collection<T, T>, SetIterable<T> {
    toSeq(): SetSeq<T>;
  }

  declare class Map<K, V> extends KeyedCollection<K, V> {
    // Eventually implement callable signature?
    constructor(): Map<K, V>;
    (): Map<K, V>;
    (iter: KeyedIterable<K, V>): Map<K, V>;
    (iter: Iterable<any, Array<any>>): Map<K, V>;
    (array: Array<Array<any>>): Map<K, V>;
    (obj: {[key: string]: V}): Map<string, V>;
    (iterator: Iterator<Array<any>>): Map<K, V>;
    (iterable: Object): Map<K, V>;
    set(key: K, value: V): Map<K, V>;
    setIn(keyPath: Array<any>, value: V): Map<K, V>;
    setIn(KeyPath: Iterable<any, any>, value: V): Map<K, V>;
    remove(key: K): Map<K, V>;
    delete(key: K): Map<K, V>;
    removeIn(keyPath: Array<any>): Map<K, V>;
    removeIn(keyPath: Iterable<any, any>): Map<K, V>;
    clear(): Map<K, V>;
    update(updater: (value: Map<K, V>) => Map<K, V>): Map<K, V>;
    update(key: K, updater: (value: V) => V): Map<K, V>;
    update(key: K, notSetValue: V, updater: (value: V) => V): Map<K, V>;
    updateIn(
        keyPath: Array<any>,
        updater: (value: any) => any
        ): Map<K, V>;
    updateIn(
        keyPath: Array<any>,
        notSetValue: any,
        updater: (value: any) => any
        ): Map<K, V>;
    updateIn(
        keyPath: Iterable<any, any>,
        updater: (value: any) => any
        ): Map<K, V>;
    updateIn(
        keyPath: Iterable<any, any>,
        notSetValue: any,
        updater: (value: any) => any
        ): Map<K, V>;
    merge(...iterables: Iterable<K, V>[]): Map<K, V>;
    merge(...iterables: {[key: string]: V}[]): Map<string, V>;
    mergeWith(
        merger: (previous?: V, next?: V) => V,
        ...iterables: Iterable<K, V>[]
        ): Map<K, V>;
    mergeWith(
        merger: (previous?: V, next?: V) => V,
        ...iterables: {[key: string]: V}[]
        ): Map<string, V>;
    mergeIn(
        keyPath: Iterable<any, any>,
        ...iterables: Iterable<K, V>[]
        ): Map<K, V>;
    mergeIn(
        keyPath: Array<any>,
        ...iterables: Iterable<K, V>[]
        ): Map<K, V>;
    mergeIn(
        keyPath: Array<any>,
        ...iterables: {[key: string]: V}[]
        ): Map<string, V>;
    mergeDeep(...iterables: Iterable<K, V>[]): Map<K, V>;
    mergeDeep(...iterables: {[key: string]: V}[]): Map<string, V>;
    mergeDeepWith(
        merger: (previous?: V, next?: V) => V,
        ...iterables: Iterable<K, V>[]
        ): Map<K, V>;
    mergeDeepWith(
        merger: (previous?: V, next?: V) => V,
        ...iterables: {[key: string]: V}[]
        ): Map<string, V>;
    mergeDeepIn(
        keyPath: Iterable<any, any>,
        ...iterables: Iterable<K, V>[]
        ): Map<K, V>;
    mergeDeepIn(
        keyPath: Array<any>,
        ...iterables: Iterable<K, V>[]
        ): Map<K, V>;
    mergeDeepIn(
        keyPath: Array<any>,
        ...iterables: {[key: string]: V}[]
        ): Map<string, V>;
    withMutations(mutator: (mutable: Map<K, V>) => any): Map<K, V>;
    asMutable(): Map<K, V>;
    asImmutable(): Map<K, V>;
  }

  declare class OrderedMap<K, V> extends Map<K, V> {
    static isOrderedMap(maybeOrderedMap: any): boolean;

    (): OrderedMap<K, V>;
    (iter: KeyedIterable<K, V>): OrderedMap<K, V>;
    (iter: Iterable<any, Array<any>>): OrderedMap<K, V>;
    (array: Array<Array<any>>): OrderedMap<K, V>;
    (obj: {[key: string]: V}): OrderedMap<string, V>;
    (iterator: Iterator<Array<any>>): OrderedMap<K, V>;
    (iterable: Object): OrderedMap<K, V>;
  }

  declare class RecordType {
    (): Map<string, any>;
    (values: {[key: string]: any}): Map<string, any>;
    // Below is deprecated - excluding for now.
    // new (values: Iterable<string, any>): Map<string, any>; // deprecated
  }

  declare function Record(
    defaultValues: {[key: string]: any}, name?: string
  ): RecordType;

  declare class Set<T> extends SetCollection<T> {
    static isSet(maybeSet: any): boolean;
    static of<T>(...values: T[]): Set<T>;
    static fromKeys<T>(iter: Iterable<T, any>): Set<T>;
    static fromKeys(obj: {[key: string]: any}): Set<string>;

    (): Set<T>;
    (iter: SetIterable<T>): Set<T>;
    (iter: IndexedIterable<T>): Set<T>;
    // Was: (iter: KeyedIterable): Set<any>;
    (iter: KeyedIterable): Set<any>;
    (array: Array<T>): Set<T>;
    (iterator: Iterator<T>): Set<T>;
    (iterable: Object): Set<T>;

    add(value: T): Set<T>;
    remove(value: T): Set<T>;
    delete(value: T): Set<T>;
    clear(): Set<T>;
    merge(...iterables: Iterable<any, T>[]): Set<T>;
    merge(...iterables: Array<T>[]): Set<T>;
    union(...iterables: Iterable<any, T>[]): Set<T>;
    union(...iterables: Array<T>[]): Set<T>;
    intersect(...iterables: Iterable<any, T>[]): Set<T>;
    intersect(...iterables: Array<T>[]): Set<T>;
    subtract(...iterables: Iterable<any, T>[]): Set<T>;
    subtract(...iterables: Array<T>[]): Set<T>;
    withMutations(mutator: (mutable: Set<T>) => any): Set<T>;
    asMutable(): Set<T>;
    asImmutable(): Set<T>;
  }

  declare class OrderedSet<T> extends Set<T> {
    static isOrderedSet(maybeOrderedSet: any): boolean;
    static of<T>(...values: T[]): OrderedSet<T>;
    static fromKeys<T>(iter: Iterable<T, any>): OrderedSet<T>;
    static fromKeys(obj: {[key: string]: any}): OrderedSet<string>;

    (): OrderedSet<T>;
    (iter: SetIterable<T>): OrderedSet<T>;
    (iter: IndexedIterable<T>): OrderedSet<T>;
    // Was: (iter: KeyedIterable<K, V>): OrderedSet<any>;
    (iter: KeyedIterable): OrderedSet<any>;
    (array: Array<T>): OrderedSet<T>;
    (iterator: Iterator<T>): OrderedSet<T>;
    (iterable: Object): OrderedSet<T>;
  }

  declare class List<T> extends IndexedCollection<T> {
    static isList(maybeList: any): boolean;
    static of<T>(...values: T[]): List<T>;

    (): List<T>;
    (iter: IndexedIterable<T>): List<T>;
    (iter: SetIterable<T>): List<T>;
    // Was: (iter: KeyedIterable<K, V>): List<any>;
    (iter: KeyedIterable): List<any>;
    (array: Array<T>): List<T>;
    (iterator: Iterator<T>): List<T>;
    (iterable: Object): List<T>;

    set(index: number, value: T): List<T>;
    setIn(keyPath: Array<any>, value: T): List<T>;
    setIn(keyPath: Iterable<any, any>, value: T): List<T>;
    remove(index: number): List<T>;
    delete(index: number): List<T>;
    removeIn(keyPath: Array<any>): List<T>;
    removeIn(keyPath: Iterable<any, any>): List<T>;
    clear(): List<T>;
    push(...values: T[]): List<T>;
    pop(): List<T>;
    unshift(...values: T[]): List<T>;
    shift(): List<T>;
    update(updater: (value: List<T>) => List<T>): List<T>;
    update(index: number, updater: (value: T) => T): List<T>;
    update(index: number, notSetValue: T, updater: (value: T) => T): List<T>;
    updateIn(
        keyPath: Array<any>,
        updater: (value: any) => any
        ): List<T>;
    updateIn(
        keyPath: Array<any>,
        notSetValue: any,
        updater: (value: any) => any
        ): List<T>;
    updateIn(
        keyPath: Iterable<any, any>,
        updater: (value: any) => any
        ): List<T>;
    updateIn(
        keyPath: Iterable<any, any>,
        notSetValue: any,
        updater: (value: any) => any
        ): List<T>;
    merge(...iterables: IndexedIterable<T>[]): List<T>;
    merge(...iterables: Array<T>[]): List<T>;
    mergeWith(
        merger: (previous?: T, next?: T) => T,
        ...iterables: IndexedIterable<T>[]
        ): List<T>;
    mergeWith(
        merger: (previous?: T, next?: T) => T,
        ...iterables: Array<T>[]
        ): List<T>;
    mergeIn(
        keyPath: Iterable<any, any>,
        ...iterables: IndexedIterable<T>[]
        ): List<T>;
    mergeIn(
        keyPath: Array<any>,
        ...iterables: IndexedIterable<T>[]
        ): List<T>;
    mergeIn(
        keyPath: Array<any>,
        ...iterables: Array<T>[]
        ): List<T>;
    mergeDeep(...iterables: IndexedIterable<T>[]): List<T>;
    mergeDeep(...iterables: Array<T>[]): List<T>;
    mergeDeepWith(
        merger: (previous?: T, next?: T) => T,
        ...iterables: IndexedIterable<T>[]
        ): List<T>;
    mergeDeepWith(
        merger: (previous?: T, next?: T) => T,
        ...iterables: Array<T>[]
        ): List<T>;
    mergeDeepIn(
        keyPath: Iterable<any, any>,
        ...iterables: IndexedIterable<T>[]
        ): List<T>;
    mergeDeepIn(
        keyPath: Array<any>,
        ...iterables: IndexedIterable<T>[]
        ): List<T>;
    mergeDeepIn(
        keyPath: Array<any>,
        ...iterables: Array<T>[]
        ): List<T>;
    setSize(size: number): List<T>;
    withMutations(mutator: (mutable: List<T>) => any): List<T>;
    asMutable(): List<T>;
    asImmutable(): List<T>;
  }

  declare class Stack<T> extends IndexedCollection<T> {
    static isStack(maybeStack: any): boolean;
    static of<T>(...values: T[]): Stack<T>;

    (): Stack<T>;
    (iter: IndexedIterable<T>): Stack<T>;
    (iter: SetIterable<T>): Stack<T>;
    // Was: (iter: KeyedIterable<K, V>): Stack<any>;
    (iter: KeyedIterable): Stack<any>;
    (array: Array<T>): Stack<T>;
    (iterator: Iterator<T>): Stack<T>;
    (iterable: Object): Stack<T>;

    clear(): Stack<T>;
    unshift(...values: T[]): Stack<T>;
    unshiftAll(iter: Iterable<any, T>): Stack<T>;
    unshiftAll(iter: Array<T>): Stack<T>;
    shift(): Stack<T>;
    push(...values: T[]): Stack<T>;
    pushAll(iter: Iterable<any, T>): Stack<T>;
    pushAll(iter: Array<T>): Stack<T>;
    pop(): Stack<T>;
    peek(): T;
    withMutations(mutator: (mutable: List<T>) => any): List<T>;
    asMutable(): List<T>;
    asImmutable(): List<T>;
  }

  declare class Iterator<T> {
    next(): { value: T; done: boolean; }
  }

  declare function Range(start?: number, end?: number, step?: number): IndexedSeq<number>;
  declare function Repeat<T>(value: T, times?: number): IndexedSeq<T>;
}
