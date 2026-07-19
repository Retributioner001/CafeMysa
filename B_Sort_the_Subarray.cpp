#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<int>a(n);
        vector<int>b(n);
        for(int i=0;i<n;i++){
            cin>>a[i];
        }
         for(int i=0;i<n;i++){
            cin>>b[i];
        }
        int start=0;
        int end=n-1;
        while(start<end){
            if(a[start]==b[start] && b[start]>b[start+1]){
                start++;
            }
            else if(a[end]==b[end] && b[end]<b[end-1]){
                end--;
            }else{
                break;
            }
        }
        cout<<start+1<<" "<<end+1<<"\n";
    }
}