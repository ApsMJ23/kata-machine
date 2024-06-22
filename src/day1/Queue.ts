type Node<T>={
    value:T;
    next?:Node<T>;

}

export default class Queue<T> {
    public length: number;
    private head?:Node<T>;
    private tail?:Node<T>;

    

    constructor() {
        this.head=this.tail=undefined;
        this.length=0;
    }

    enqueue(item: T): void {
        this.length++;
        if(!this.tail || !this.head){
            this.head = this.tail = {value:item} as Node<T>;
        }else{
            this.tail.next = {value:item} as Node<T>;
            this.tail = this.tail.next;
        }

}
    deque(): T | undefined {
        if(!this.head){
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        // our own implementation of garbage collection
        head.next = undefined;

        return head?.value;


}
    peek(): T | undefined {
        return this.head?.value;

}
}