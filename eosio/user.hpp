#include <eosio/eosio.hpp>

using namespace std;
using namespace eosio;

class [[eosio::contract]] user : public eosio::contract {

private:

  struct [[eosio::table]] user_info {
    name        username;

    auto primary_key() const {return username.value}
  };

public:

  [[eosio::action]]
  void login(name username);

  [[eosio::action]]
  void register(name username);

}
