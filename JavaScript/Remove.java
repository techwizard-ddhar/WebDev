class Remove
{
    static int removeele(int A[], int val) {
        int i = 0;
        for (int j = 0; j < A.length; j++) {
            if (A[j] != val) {
                int temp = A[i];
                A[i] = A[j];
                A[j] = temp;
                i++;
            }
        }
        return i;
    }
    
    static void display(int A[], int k)
    {
        for(int i = 0; i < k; i++){
            System.out.print(A[i] + " ");
        }
    }
    
    public static void main(String args[])
    
    {
        int A[] = {0,1,2,2,3,0,4,2};
        int val = 2;
        int k = removeele(A, val);
        display(A,k);
    }
    
}