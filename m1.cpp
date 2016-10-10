
vector <string> v;

//toast standard bank display book

int ans1=0;
int ans2=0;
for(int i=0 ; i < v.size() ; i++)
{
  int flag1=0;
  int flag2=0;
  int cnt1=0;
  int cnt2=0;
  for(int j=0; j < v[i].length() ; j++)
  {
    string now = v[i];
    if(now[i] == 'a'){//모음일 경우{
      if(flag1==false)
      {
        flag1 = true;
        cnt1++;
      }else{
        cnt1++;
      }

      if(flag2 == true)
      {
        if(cnt1==3)
          ans2++;
        flag2 = false;
        cnt2=0;
      }

    }
    else{
      if(flag1 == true)
      {
        if(cnt1==2)
          ans1++;
        flag1 = false;
        cnt1=0;
      }

      if(flag2 == false)
      {
        flag2 = true;
        cnt2++;
      }else{
        cnt2++;
      }
    }

  }
}
