#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        int n,k;
        cin>>n>>k;
        int start=0;
        vector<int>v(n,0);
        for(int i=0;i<n;i++){
            cin>>v[i];
        }
        int end=n-1;
        sort(v.begin(),v.end());
        while(start+1<end && k>0){
            if(v[start]+v[start+1]<v[end]){
                start=start+2;
            }else{
                end--;
            }
            k--;
        }
        int ans=0;
        for(int i=start;i<=end;i++){
            ans=ans+v[i];

        }
        cout<<ans<<"\n";


    }
}